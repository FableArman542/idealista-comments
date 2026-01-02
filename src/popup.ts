// --- Interfaces ---
interface UserComment {
    id: number;
    nickname: string;
    text: string;
    topics: string[];
    likes: number;
    likedByUser: boolean; // Mocking local state
    timestamp: string;
}

interface PropertyInfo {
    id: string | null;
    title: string;
}

// --- State Management ---
let currentListingId: string | null = null;
let currentUserNickname: string = "Guest";
let comments: UserComment[] = []; // Temporary In-Memory DB

// --- DOM Elements ---
const idDisplay = document.getElementById('property-id') as HTMLElement;
const titleDisplay = document.getElementById('property-title') as HTMLElement;
const commentsList = document.getElementById('comments-list') as HTMLElement;
const postBtn = document.getElementById('post-btn') as HTMLButtonElement;
const commentInput = document.getElementById('comment-input') as HTMLTextAreaElement;
const nicknameInput = document.getElementById('nickname') as HTMLInputElement;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initializeExtension();
    
    // Load Nickname from storage
    chrome.storage.local.get(['nickname'], (result: { [key: string]: any }) => {
        if (result.nickname) {
            currentUserNickname = result.nickname;
            nicknameInput.value = result.nickname;
        }
    });
});

// Save nickname on change
nicknameInput.addEventListener('change', (e) => {
    const target = e.target as HTMLInputElement;
    currentUserNickname = target.value || "Guest";
    chrome.storage.local.set({ nickname: currentUserNickname });
});

// --- Core Logic ---

function initializeExtension() {
    // Check which tab we are on
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
        const activeTab = tabs[0];
        
        // Ensure we are on a valid tab
        if (activeTab.id) {
            // Send message to Content Script to get Data
            chrome.tabs.sendMessage(activeTab.id, { action: "GET_PROPERTY_INFO" }, (response: PropertyInfo) => {
                if (chrome.runtime.lastError || !response || !response.id) {
                    idDisplay.innerText = "No Listing Found";
                    titleDisplay.innerText = "Please navigate to an idealista listing.";
                    postBtn.disabled = true;
                    return;
                }

                // Update UI with Listing Data
                currentListingId = response.id;
                idDisplay.innerText = `Listing #${response.id}`;
                titleDisplay.innerText = response.title;
                
                // MOCK: Load fake comments for demonstration
                loadMockComments(); 
            });
        }
    });
}

function renderComments() {
    commentsList.innerHTML = ''; // Clear current list

    if (comments.length === 0) {
        commentsList.innerHTML = '<div class="empty-state">No comments yet.</div>';
        return;
    }

    comments.forEach(comment => {
        const card = document.createElement('div');
        card.className = 'comment-card';
        
        const likeClass = comment.likedByUser ? 'liked' : '';
        
        // Generate Topic Tags HTML
        const topicsHtml = comment.topics && comment.topics.length > 0 
            ? `<div class="topic-tags">
                ${comment.topics.map(t => `<span class="topic-tag topic-${t}">${t.charAt(0).toUpperCase() + t.slice(1)}</span>`).join('')}
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
        actionBtn?.addEventListener('click', () => toggleLike(comment.id));

        commentsList.appendChild(card);
    });

    // Scroll to bottom
    commentsList.scrollTop = commentsList.scrollHeight;
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
}

function toggleLike(commentId: number) {
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        if (comment.likedByUser) {
            comment.likes--;
            comment.likedByUser = false;
        } else {
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