import { translations, Language, TranslationKeys } from './locales';
import { auth, signInWithCredential, GoogleAuthProvider, signOut, onAuthStateChanged, User, db, collection, addDoc, getDocs, query, where, doc, updateDoc, deleteDoc, increment, arrayUnion, arrayRemove, serverTimestamp, Timestamp } from './firebase';

// --- Interfaces ---
interface UserComment {
    id: string; // Changed to string for Firestore IDs
    listingId: string;
    userId: string;
    nickname: string;
    text: string;
    topics: string[];
    likes: number;
    likedBy: string[]; // Array of userIds who liked
    timestamp: any; // Firestore Timestamp
    replies?: UserComment[]; // Nested replies are usually subcollections or recursive structures, but for simplicity we might fetch them separately or flatten.
                            // For MVP, let's keep replies as a subcollection or just a separate query. 
                            // Actually, keeping replies in a top-level collection with 'parentId' is easier for NoSQL.
    parentId?: string | null;
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
let comments: UserComment[] = []; 
let currentUserId: string | null = null;

// --- DOM Elements ---
const idDisplay = document.getElementById('property-id') as HTMLElement;
const titleDisplay = document.getElementById('property-title') as HTMLElement;
const commentsList = document.getElementById('comments-list') as HTMLElement;
const postBtn = document.getElementById('post-btn') as HTMLButtonElement;
const commentInput = document.getElementById('comment-input') as HTMLTextAreaElement;
const inputContainer = document.querySelector('.input-container') as HTMLElement;
const langSelect = document.getElementById('lang-select') as HTMLSelectElement;

// --- Auth Elements ---
const signInView = document.getElementById('sign-in-view') as HTMLElement;
const userInfoView = document.getElementById('user-info-view') as HTMLElement;
const googleSignInBtn = document.getElementById('google-signin-btn') as HTMLButtonElement;
const signOutBtn = document.getElementById('sign-out-btn') as HTMLButtonElement;
const userDisplayName = document.getElementById('user-display-name') as HTMLElement;
const userAvatar = document.getElementById('user-avatar') as HTMLImageElement;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initializeExtension();
    initializeAuth();
    
    // Auto-detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'pt') {
        currentLanguage = 'pt';
        if (langSelect) {
            langSelect.value = 'pt';
        }
    }

    // Load Settings from storage (overrides auto-detect)
    chrome.storage.local.get(['language'], (result: { [key: string]: any }) => {
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
        if (activeTab && activeTab.id) {
            // Attempt to get data
            getPropertyInfo(activeTab.id);
        } else {
            showErrorState();
        }
    });
}

function getPropertyInfo(tabId: number) {
    chrome.tabs.sendMessage(tabId, { action: "GET_PROPERTY_INFO" }, (response: PropertyInfo) => {
        // Handle message failure (e.g. content script not injected)
        if (chrome.runtime.lastError) {
            console.log("Message failed, attempting injection...", chrome.runtime.lastError);
            injectContentScript(tabId);
            return;
        }

        handlePropertyResponse(response);
    });
}

function injectContentScript(tabId: number) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['dist/content.js']
    }, () => {
        if (chrome.runtime.lastError) {
            console.error("Script injection failed:", chrome.runtime.lastError);
            showErrorState();
            return;
        }
        
        // Retry message after injection with a slight delay
        let attempts = 0;
        const maxAttempts = 3;
        
        const trySendMessage = () => {
            attempts++;
            chrome.tabs.sendMessage(tabId, { action: "GET_PROPERTY_INFO" }, (response: PropertyInfo) => {
                if (chrome.runtime.lastError) {
                    console.warn(`Attempt ${attempts} failed:`, chrome.runtime.lastError.message);
                    if (attempts < maxAttempts) {
                        setTimeout(trySendMessage, 200); // Retry every 200ms
                    } else {
                        showErrorState();
                    }
                } else {
                    console.log("Connection established!");
                    handlePropertyResponse(response);
                }
            });
        };

        setTimeout(trySendMessage, 100);
    });
}

function handlePropertyResponse(response: PropertyInfo) {
    const tr = translations[currentLanguage];
    if (!response || !response.id) {
        showErrorState();
        return;
    }

    // Update UI with Listing Data
    currentListingId = response.id;
    currentListingTitle = response.title;
    idDisplay.innerText = `${tr.listingPrefix}${response.id}`;
    titleDisplay.innerText = response.title;
    // Remove data-i18n attribute so it doesn't get overwritten by updateUITexts
    titleDisplay.removeAttribute('data-i18n');
    postBtn.disabled = false;
    
    // Fetch real comments
    fetchComments(response.id);
}

function showErrorState() {
    const tr = translations[currentLanguage];
    idDisplay.innerText = tr.noListingFound;
    titleDisplay.innerText = tr.navigateMessage;
    postBtn.disabled = true;
}

// --- Auth Logic ---

function initializeAuth() {
    console.log("Extension ID (for Google Cloud Console):", chrome.runtime.id);
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            showAuthenticatedUI(user);
        } else {
            showUnauthenticatedUI();
        }
    });
    
    if (googleSignInBtn) {
        googleSignInBtn.addEventListener('click', handleGoogleSignIn);
    }
    if (signOutBtn) {
        signOutBtn.addEventListener('click', handleSignOut);
    }
}

async function handleGoogleSignIn() {
    try {
        chrome.identity.getAuthToken({ interactive: true }, async function(token) {
            if (chrome.runtime.lastError || !token) {
                console.error("Identity Error:", chrome.runtime.lastError);
                return;
            }
            
            // Create a credential with the token
            const credential = GoogleAuthProvider.credential(null, token as string);
            
            // Sign in with the credential
            await signInWithCredential(auth, credential);
        });
    } catch (error) {
        console.error("Sign In Error:", error);
    }
}

async function handleSignOut() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Sign Out Error:", error);
    }
}

function showAuthenticatedUI(user: User) {
    if (signInView) signInView.style.display = 'none';
    if (userInfoView) userInfoView.style.display = 'flex';
    
    // Update user info
    if (userDisplayName) userDisplayName.textContent = user.displayName || user.email || 'User';
    
    if (userAvatar) {
        if (user.photoURL) {
            userAvatar.src = user.photoURL;
            userAvatar.style.display = 'block';
        } else {
            userAvatar.style.display = 'none';
        }
    }

    // Update global nickname and ID
    currentUserNickname = user.displayName || "User";
    currentUserId = user.uid;
    
    // Show input container
    if (inputContainer) inputContainer.style.display = 'flex';
    
    // Re-render comments to enable actions
    renderComments();
}

function showUnauthenticatedUI() {
    if (signInView) signInView.style.display = 'block';
    if (userInfoView) userInfoView.style.display = 'none';
    
    currentUserNickname = "Guest";
    currentUserId = null;
    
    // Hide input container
    if (inputContainer) inputContainer.style.display = 'none';
    
    // Re-render comments to disable actions
    renderComments();
}

// --- Firestore Logic ---

async function fetchComments(listingId: string) {
    if (!listingId) return;
    
    commentsList.innerHTML = '<div class="loading-spinner">Loading...</div>';
    
    try {
        // Query without orderBy to avoid needing a composite index
        const q = query(
            collection(db, "comments"), 
            where("listingId", "==", listingId)
        );
        
        const querySnapshot = await getDocs(q);
        const allComments: UserComment[] = [];
        
        querySnapshot.forEach((doc) => {
            allComments.push({ id: doc.id, ...doc.data() } as UserComment);
        });

        // Sort client-side
        allComments.sort((a, b) => {
            const timeA = a.timestamp?.seconds ?? 0;
            const timeB = b.timestamp?.seconds ?? 0;
            return timeA - timeB;
        });
        
        // Organize into threads (parents and replies)
        // This is a simple client-side threading. 
        // Ideally we fetch root comments and then replies, but for small scale this works.
        const rootComments = allComments.filter(c => !c.parentId);
        const replies = allComments.filter(c => c.parentId);
        
        rootComments.forEach(root => {
            root.replies = replies.filter(r => r.parentId === root.id);
        });
        
        comments = rootComments;
        renderComments();
        
    } catch (error) {
        console.error("Error fetching comments:", error);
        commentsList.innerHTML = `<div class="error-state">Error loading comments.</div>`;
    }
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
}

function renderCommentNode(comment: UserComment): HTMLElement {
    const t = translations[currentLanguage];
    const card = document.createElement('div');
    card.className = 'comment-card';
    card.dataset.id = comment.id;
    
    // Check if user is logged in and liked
    const isLoggedIn = auth.currentUser !== null;
    const likedByUser = currentUserId ? (comment.likedBy && comment.likedBy.includes(currentUserId)) : false;
    const isOwner = currentUserId && comment.userId === currentUserId;
    const likeClass = likedByUser ? 'liked' : '';
    const actionStyle = isLoggedIn ? '' : 'opacity: 0.5; cursor: not-allowed;';
    
    // Format Timestamp
    let timeString = "";
    if (comment.timestamp && comment.timestamp.toDate) {
        timeString = comment.timestamp.toDate().toLocaleDateString() + " " + comment.timestamp.toDate().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    } else {
        timeString = "Just now"; // Optimistic update fallback
    }

    // Generate Topic Tags HTML
    const topicsHtml = comment.topics && comment.topics.length > 0 
        ? `<div class="topic-tags">
            ${comment.topics.map(topicKey => {
                const label = t[topicKey as TranslationKeys] || topicKey;
                return `<span class="topic-tag topic-${topicKey}">${label}</span>`;
            }).join('')}
           </div>`
        : '';

    card.innerHTML = `
        <div class="comment-header">
            <span>${comment.nickname}</span>
            <span style="font-weight:normal; opacity:0.6;">${timeString}</span>
        </div>
        ${topicsHtml}
        <div class="comment-body">
            ${comment.text}
        </div>
        <div class="comment-actions">
            <span class="action-btn like-btn ${likeClass}" style="${actionStyle}" data-action="like">♥ ${comment.likes || 0}</span>
            <span class="action-btn reply-btn" style="${actionStyle}" data-action="reply">${t.reply || 'Reply'}</span>
            ${isOwner ? `<span class="action-btn delete-btn" style="color: red;">Delete</span>` : ''}
        </div>
        <div class="reply-input-container" style="display:none;"></div>
        <div class="replies-container"></div>
    `;

    // Attach Event Listeners
    const likeBtn = card.querySelector('.like-btn');
    likeBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!auth.currentUser) return; 
        toggleLike(comment.id, likedByUser);
    });

    const replyBtn = card.querySelector('.reply-btn');
    replyBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!auth.currentUser) return;
        toggleReplyInput(card, comment.id);
    });

    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm("Are you sure you want to delete this comment?")) {
             handleDeleteComment(comment.id);
        }
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

function toggleReplyInput(card: HTMLElement, parentId: string) {
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
                container.style.display = 'none';
                container.innerHTML = '';
            }
        });
        
        (container.querySelector('.reply-textarea') as HTMLElement).focus();

    } else {
        container.style.display = 'none';
        container.innerHTML = '';
    }
}

async function handlePostReply(parentId: string, text: string) {
    if (!currentUserId || !currentListingId) return;

    // Optimistic Update could go here, but for now let's just wait for DB
    try {
        await addDoc(collection(db, "comments"), {
            listingId: currentListingId,
            userId: currentUserId,
            nickname: currentUserNickname,
            text: text,
            topics: [],
            likes: 0,
            likedBy: [],
            timestamp: serverTimestamp(),
            parentId: parentId
        });
        // Reload comments to show new reply
        fetchComments(currentListingId);
    } catch (e) {
        console.error("Error adding reply: ", e);
    }
}


async function handlePostComment() {
    if (!auth.currentUser || !currentListingId || !currentUserId) return; 
    const text = commentInput.value.trim();
    if (!text) return;

    const selectedTopics = Array.from(document.querySelectorAll('.topic-checkbox:checked'))
        .map(cb => (cb as HTMLInputElement).value);

    try {
        await addDoc(collection(db, "comments"), {
            listingId: currentListingId,
            userId: currentUserId,
            nickname: currentUserNickname,
            text: text,
            topics: selectedTopics,
            likes: 0,
            likedBy: [],
            timestamp: serverTimestamp(),
            parentId: null
        });

        commentInput.value = '';
        document.querySelectorAll('.topic-checkbox').forEach(cb => (cb as HTMLInputElement).checked = false);
        
        // Reload comments
        fetchComments(currentListingId);
        
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function handleDeleteComment(commentId: string) {
    if (!currentUserId) return;

    try {
        await deleteDoc(doc(db, "comments", commentId));
        // Refresh comments
        if (currentListingId) fetchComments(currentListingId);
    } catch (e) {
        console.error("Error deleting comment: ", e);
    }
}

async function toggleLike(commentId: string, currentlyLiked: boolean) {
    if (!currentUserId) return;
    
    const commentRef = doc(db, "comments", commentId);
    
    try {
        if (currentlyLiked) {
            await updateDoc(commentRef, {
                likes: increment(-1),
                likedBy: arrayRemove(currentUserId)
            });
        } else {
            await updateDoc(commentRef, {
                likes: increment(1),
                likedBy: arrayUnion(currentUserId)
            });
        }
        // Ideally use onSnapshot for real-time updates, but for now re-fetch
        if (currentListingId) fetchComments(currentListingId);
    } catch (e) {
        console.error("Error toggling like: ", e);
    }
}

postBtn.addEventListener('click', handlePostComment);
