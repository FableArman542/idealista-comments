import { translations, Language, TranslationKeys } from './locales.js';

// --- Interfaces ---
interface UserComment {
    id: number;
    nickname: string;
    text: string;
    topics: string[];
    likes: number;
    likedByUser: boolean; // Mocking local state
    timestamp: string;
    replies?: UserComment[];
}

interface PropertyInfo {
    id: string | null;
    title: string;
}

// --- State Management ---
let currentListingId: string | null = null;
let currentListingTitle: string | null = null;
let currentUserNickname: string = "Guest";
let currentLanguage: Language = 'en';
let comments: UserComment[] = []; // Temporary In-Memory DB

// --- DOM Elements ---
const idDisplay = document.getElementById('property-id') as HTMLElement;
const titleDisplay = document.getElementById('property-title') as HTMLElement;
const commentsList = document.getElementById('comments-list') as HTMLElement;
const postBtn = document.getElementById('post-btn') as HTMLButtonElement;
const commentInput = document.getElementById('comment-input') as HTMLTextAreaElement;
const nicknameInput = document.getElementById('nickname') as HTMLInputElement;
const langSelect = document.getElementById('lang-select') as HTMLSelectElement;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initializeExtension();
    
    // Auto-detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'pt') {
        currentLanguage = 'pt';
        if (langSelect) {
            langSelect.value = 'pt';
        }
    }

    // Load Settings from storage (overrides auto-detect)
    chrome.storage.local.get(['nickname', 'language'], (result: { [key: string]: any }) => {
        if (result.nickname) {
            currentUserNickname = result.nickname;
            nicknameInput.value = result.nickname;
        }
        if (result.language) {
            currentLanguage = result.language as Language;
            if (langSelect) {
                langSelect.value = currentLanguage;
            }
        }
        // Update UI after determining final language
        updateUITexts();
    });
});

// Save nickname on change
nicknameInput.addEventListener('change', (e) => {
    const target = e.target as HTMLInputElement;
    currentUserNickname = target.value || "Guest";
    chrome.storage.local.set({ nickname: currentUserNickname });
});

// Language Switch
if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        const target = e.target as HTMLSelectElement;
        currentLanguage = target.value as Language;
        chrome.storage.local.set({ language: currentLanguage });
        updateUITexts();
        renderComments(); // Re-render comments to translate topic tags if needed
    });
}

function updateUITexts() {
    const t = translations[currentLanguage];
    
    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n') as TranslationKeys;
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder') as TranslationKeys;
        if (t[key]) {
            (el as HTMLInputElement).placeholder = t[key];
        }
    });
    
    // Update dynamic elements if needed
    if (currentListingId) {
        // We have an ID loaded
        idDisplay.innerText = `${t.listingPrefix}${currentListingId}`;
        // Ensure title is not overwritten by "Detecting listing..."
        if (titleDisplay.innerText === translations['en'].detectingListing || 
            titleDisplay.innerText === translations['pt'].detectingListing) {
             // If currently showing default detecting text, we might want to keep the scraped title
             // But titleDisplay.innerText is the DOM element.
             // We need to store the scraped title in a variable to restore it or stop it from being overwritten.
        }
    } else {
        // No ID loaded yet
        if (postBtn.disabled) {
             // We tried and failed to find a listing
             idDisplay.innerText = t.noListingFound;
             titleDisplay.innerText = t.navigateMessage;
        } else {
             // Still loading or detecting
             // This case is handled by the data-i18n="loadingId" above
        }
    }
}

// --- Core Logic ---

function initializeExtension() {
    // Check which tab we are on
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
        const activeTab = tabs[0];
        
        // Ensure we are on a valid tab
        if (activeTab.id) {
            // Send message to Content Script to get Data
            chrome.tabs.sendMessage(activeTab.id, { action: "GET_PROPERTY_INFO" }, (response: PropertyInfo) => {
                const tr = translations[currentLanguage];
                if (chrome.runtime.lastError || !response || !response.id) {
                    idDisplay.innerText = tr.noListingFound;
                    titleDisplay.innerText = tr.navigateMessage;
                    postBtn.disabled = true;
                    return;
                }

                // Update UI with Listing Data
                currentListingId = response.id;
                currentListingTitle = response.title;
                idDisplay.innerText = `${tr.listingPrefix}${response.id}`;
                titleDisplay.innerText = response.title;
                // Remove data-i18n attribute so it doesn't get overwritten by updateUITexts
                titleDisplay.removeAttribute('data-i18n');
                
                // MOCK: Load fake comments for demonstration
                loadMockComments(); 
            });
        }
    });
}

function renderComments() {
    commentsList.innerHTML = ''; // Clear current list
    const t = translations[currentLanguage];

    if (comments.length === 0) {
        commentsList.innerHTML = `<div class="empty-state">${t.noComments}</div>`;
        return;
    }

    comments.forEach(comment => {
        commentsList.appendChild(renderCommentNode(comment));
    });

    // Scroll to bottom only if it's the first render or user just posted?
    // For now, let's keep it simple and not auto-scroll on every render, 
    // or maybe only scroll if near bottom. 
    // commentsList.scrollTop = commentsList.scrollHeight;
}

function renderCommentNode(comment: UserComment): HTMLElement {
    const t = translations[currentLanguage];
    const card = document.createElement('div');
    card.className = 'comment-card';
    
    const likeClass = comment.likedByUser ? 'liked' : '';
    
    // Generate Topic Tags HTML
    const topicsHtml = comment.topics && comment.topics.length > 0 
        ? `<div class="topic-tags">
            ${comment.topics.map(topicKey => {
                // Translate the topic key
                const label = t[topicKey as TranslationKeys] || topicKey;
                return `<span class="topic-tag topic-${topicKey}">${label}</span>`;
            }).join('')}
           </div>`
        : '';

    card.innerHTML = `
        <div class="comment-header">
            <span>${comment.nickname}</span>
            <span style="font-weight:normal; opacity:0.6;">${comment.timestamp}</span>
        </div>
        ${topicsHtml}
        <div class="comment-body">
            ${comment.text}
        </div>
        <div class="comment-actions">
            <span class="action-btn like-btn ${likeClass}" data-action="like">♥ ${comment.likes}</span>
            <span class="action-btn reply-btn" data-action="reply">${t.reply || 'Reply'}</span>
        </div>
        <div class="reply-input-container" style="display:none;"></div>
        <div class="replies-container"></div>
    `;

    // Attach Event Listeners
    const likeBtn = card.querySelector('.like-btn');
    likeBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLike(comment.id);
    });

    const replyBtn = card.querySelector('.reply-btn');
    replyBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleReplyInput(card, comment.id);
    });

    // Render Nested Replies
    const repliesContainer = card.querySelector('.replies-container') as HTMLElement;
    if (comment.replies && comment.replies.length > 0) {
        comment.replies.forEach(reply => {
            repliesContainer.appendChild(renderCommentNode(reply));
        });
    }

    return card;
}

function toggleReplyInput(card: HTMLElement, parentId: number) {
    const container = card.querySelector('.reply-input-container') as HTMLElement;
    const t = translations[currentLanguage];

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        container.innerHTML = `
            <textarea class="reply-textarea" placeholder="${t.placeholder}"></textarea>
            <div class="reply-actions">
                <button class="btn-small btn-cancel">${t.cancel || 'Cancel'}</button>
                <button class="btn-small btn-post">${t.post}</button>
            </div>
        `;
        
        const cancelBtn = container.querySelector('.btn-cancel');
        cancelBtn?.addEventListener('click', () => {
            container.style.display = 'none';
            container.innerHTML = '';
        });

        const postBtn = container.querySelector('.btn-post');
        postBtn?.addEventListener('click', () => {
            const textarea = container.querySelector('.reply-textarea') as HTMLTextAreaElement;
            const text = textarea.value.trim();
            if (text) {
                handlePostReply(parentId, text);
            }
        });
        
        // Focus textarea
        (container.querySelector('.reply-textarea') as HTMLElement).focus();

    } else {
        container.style.display = 'none';
        container.innerHTML = '';
    }
}

function handlePostReply(parentId: number, text: string) {
    const newReply: UserComment = {
        id: Date.now(),
        nickname: currentUserNickname,
        text: text,
        topics: [],
        likes: 0,
        likedByUser: false,
        timestamp: new Date().toLocaleTimeString()
    };

    // Find parent and add reply
    const addReplyRecursively = (commentsList: UserComment[]): boolean => {
        for (let comment of commentsList) {
            if (comment.id === parentId) {
                if (!comment.replies) comment.replies = [];
                comment.replies.push(newReply);
                return true;
            }
            if (comment.replies && addReplyRecursively(comment.replies)) {
                return true;
            }
        }
        return false;
    };

    addReplyRecursively(comments);
    renderComments();
}


function handlePostComment() {
    const text = commentInput.value.trim();
    if (!text) return;

    // Get selected topics
    const selectedTopics = Array.from(document.querySelectorAll('.topic-checkbox:checked'))
        .map(cb => (cb as HTMLInputElement).value);

    const newComment: UserComment = {
        id: Date.now(),
        nickname: currentUserNickname,
        text: text,
        topics: selectedTopics,
        likes: 0,
        likedByUser: false,
        timestamp: new Date().toLocaleTimeString()
    };

    comments.push(newComment);
    commentInput.value = '';
    
    // Clear checkboxes
    document.querySelectorAll('.topic-checkbox').forEach(cb => (cb as HTMLInputElement).checked = false);

    renderComments();
    
    // Scroll to bottom for main comments
    commentsList.scrollTop = commentsList.scrollHeight;
}

function toggleLike(commentId: number) {
    const toggleRecursively = (list: UserComment[]): boolean => {
        for (let comment of list) {
            if (comment.id === commentId) {
                if (comment.likedByUser) {
                    comment.likes--;
                    comment.likedByUser = false;
                } else {
                    comment.likes++;
                    comment.likedByUser = true;
                }
                return true;
            }
            if (comment.replies && toggleRecursively(comment.replies)) {
                return true;
            }
        }
        return false;
    };

    toggleRecursively(comments);
    renderComments();
}

postBtn.addEventListener('click', handlePostComment);

// --- Mock Data ---
function loadMockComments() {
    // In the real version, we will fetch from Firebase using currentListingId
    comments = [
        { 
            id: 1, 
            nickname: "HouseHunter_PT", 
            text: "Visited this yesterday. The photos make the living room look bigger than it is.", 
            topics: ["price", "noise"], 
            likes: 4, 
            likedByUser: false, 
            timestamp: "10:30 AM",
            replies: [
                {
                    id: 3,
                    nickname: "Agent007",
                    text: "Thanks for the heads up!",
                    topics: [],
                    likes: 1,
                    likedByUser: false,
                    timestamp: "10:45 AM"
                }
            ]
        },
        { 
            id: 2, 
            nickname: "Maria1990", 
            text: "Does anyone know if the street is noisy at night?", 
            topics: ["noise"], 
            likes: 1, 
            likedByUser: false, 
            timestamp: "11:15 AM" 
        }
    ];
    renderComments();
}
