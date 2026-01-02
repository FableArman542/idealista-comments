import { translations } from './locales.js';
// --- State Management ---
let currentListingId = null;
let currentListingTitle = null;
let currentUserNickname = "Guest";
let currentLanguage = 'en';
let comments = []; // Temporary In-Memory DB
// --- DOM Elements ---
const idDisplay = document.getElementById('property-id');
const titleDisplay = document.getElementById('property-title');
const commentsList = document.getElementById('comments-list');
const postBtn = document.getElementById('post-btn');
const commentInput = document.getElementById('comment-input');
const nicknameInput = document.getElementById('nickname');
const langSelect = document.getElementById('lang-select');
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
    chrome.storage.local.get(['nickname', 'language'], (result) => {
        if (result.nickname) {
            currentUserNickname = result.nickname;
            nicknameInput.value = result.nickname;
        }
        if (result.language) {
            currentLanguage = result.language;
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
    const target = e.target;
    currentUserNickname = target.value || "Guest";
    chrome.storage.local.set({ nickname: currentUserNickname });
});
// Language Switch
if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        const target = e.target;
        currentLanguage = target.value;
        chrome.storage.local.set({ language: currentLanguage });
        updateUITexts();
        renderComments(); // Re-render comments to translate topic tags if needed
    });
}
function updateUITexts() {
    const t = translations[currentLanguage];
    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
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
    }
    else {
        // No ID loaded yet
        if (postBtn.disabled) {
            // We tried and failed to find a listing
            idDisplay.innerText = t.noListingFound;
            titleDisplay.innerText = t.navigateMessage;
        }
        else {
            // Still loading or detecting
            // This case is handled by the data-i18n="loadingId" above
        }
    }
}
// --- Core Logic ---
function initializeExtension() {
    // Check which tab we are on
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        // Ensure we are on a valid tab
        if (activeTab.id) {
            // Send message to Content Script to get Data
            chrome.tabs.sendMessage(activeTab.id, { action: "GET_PROPERTY_INFO" }, (response) => {
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
        const card = document.createElement('div');
        card.className = 'comment-card';
        const likeClass = comment.likedByUser ? 'liked' : '';
        // Generate Topic Tags HTML
        const topicsHtml = comment.topics && comment.topics.length > 0
            ? `<div class="topic-tags">
                ${comment.topics.map(topicKey => {
                // Translate the topic key
                const label = t[topicKey] || topicKey;
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
            <div class="comment-actions" data-id="${comment.id}">
                <span class="heart-icon ${likeClass}">♥</span>
                <span>${comment.likes}</span>
            </div>
        `;
        // Add Like Listener
        const actionBtn = card.querySelector('.comment-actions');
        actionBtn === null || actionBtn === void 0 ? void 0 : actionBtn.addEventListener('click', () => toggleLike(comment.id));
        commentsList.appendChild(card);
    });
    // Scroll to bottom
    commentsList.scrollTop = commentsList.scrollHeight;
}
function handlePostComment() {
    const text = commentInput.value.trim();
    if (!text)
        return;
    // Get selected topics
    const selectedTopics = Array.from(document.querySelectorAll('.topic-checkbox:checked'))
        .map(cb => cb.value);
    const newComment = {
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
    document.querySelectorAll('.topic-checkbox').forEach(cb => cb.checked = false);
    renderComments();
}
function toggleLike(commentId) {
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        if (comment.likedByUser) {
            comment.likes--;
            comment.likedByUser = false;
        }
        else {
            comment.likes++;
            comment.likedByUser = true;
        }
        renderComments();
    }
}
postBtn.addEventListener('click', handlePostComment);
// --- Mock Data ---
function loadMockComments() {
    // In the real version, we will fetch from Firebase using currentListingId
    comments = [
        { id: 1, nickname: "HouseHunter_PT", text: "Visited this yesterday. The photos make the living room look bigger than it is.", topics: ["price", "noise"], likes: 4, likedByUser: false, timestamp: "10:30 AM" },
        { id: 2, nickname: "Maria1990", text: "Does anyone know if the street is noisy at night?", topics: ["noise"], likes: 1, likedByUser: false, timestamp: "11:15 AM" }
    ];
    renderComments();
}
