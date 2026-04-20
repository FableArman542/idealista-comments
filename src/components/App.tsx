import { useState, useEffect, useCallback } from 'preact/hooks';
import { User } from 'firebase/auth';
import { translations, Language } from '../locales';
import { auth, onAuthStateChanged, db, collection, addDoc, getDocs, query, where, doc, updateDoc, deleteDoc, increment, arrayUnion, arrayRemove, serverTimestamp } from '../firebase';
import { I18nContext } from '../hooks/useTranslation';
import { UserComment, PropertyInfo } from '../types';
import { Header } from './Header';
import { AuthBar } from './AuthBar';
import { GuidanceView } from './GuidanceView';
import { CommentsList } from './CommentsList';
import { CommentInput } from './CommentInput';

export function App() {
    const [lang, setLangState] = useState<Language>('en');
    const [user, setUser] = useState<User | null>(null);
    const [listingId, setListingId] = useState<string | null>(null);
    const [listingTitle, setListingTitle] = useState<string | null>(null);
    const [comments, setComments] = useState<UserComment[]>([]);
    const [loading, setLoading] = useState(true);
    const [commentsLoading, setCommentsLoading] = useState(false);
    const [noListing, setNoListing] = useState(false);

    const t = translations[lang];

    // --- Language ---
    const setLang = useCallback((newLang: Language) => {
        setLangState(newLang);
        chrome.storage.local.set({ language: newLang });
    }, []);

    useEffect(() => {
        const browserLang = navigator.language.split('-')[0] as Language;
        if (['pt', 'es', 'it'].includes(browserLang)) {
            setLangState(browserLang);
        }
        chrome.storage.local.get(['language'], (result: { [key: string]: any }) => {
            if (result.language) {
                setLangState(result.language as Language);
            }
        });
    }, []);

    // --- Firestore (defined early so other effects can reference it) ---
    const fetchComments = useCallback(async (id: string) => {
        setCommentsLoading(true);
        try {
            const q = query(collection(db, 'comments'), where('listingId', '==', id));
            const snapshot = await getDocs(q);
            const all: UserComment[] = [];
            snapshot.forEach((d) => all.push({ id: d.id, ...d.data() } as UserComment));

            all.sort((a, b) => (a.timestamp?.seconds ?? 0) - (b.timestamp?.seconds ?? 0));

            const roots = all.filter((c) => !c.parentId);
            const replies = all.filter((c) => c.parentId);
            roots.forEach((root) => {
                root.replies = replies.filter((r) => r.parentId === root.id);
            });

            setComments(roots);
        } catch (error) {
            console.error('Error fetching comments:', error);
        } finally {
            setCommentsLoading(false);
        }
    }, []);

    // --- Auth ---
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser && listingId) {
                fetchComments(listingId);
            }
        });
        return unsubscribe;
    }, [listingId, fetchComments]);

    // --- Property Detection ---
    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            if (!activeTab?.id) {
                setLoading(false);
                setNoListing(true);
                return;
            }
            getPropertyInfo(activeTab.id);
        });
    }, []);

    function getPropertyInfo(tabId: number) {
        chrome.tabs.sendMessage(tabId, { action: 'GET_PROPERTY_INFO' }, (response: PropertyInfo) => {
            if (chrome.runtime.lastError) {
                injectContentScript(tabId);
                return;
            }
            handlePropertyResponse(response);
        });
    }

    function injectContentScript(tabId: number) {
        chrome.scripting.executeScript(
            { target: { tabId }, files: ['dist/content.js'] },
            () => {
                if (chrome.runtime.lastError) {
                    setLoading(false);
                    setNoListing(true);
                    return;
                }

                let attempts = 0;
                const maxAttempts = 3;

                const trySendMessage = () => {
                    attempts++;
                    chrome.tabs.sendMessage(tabId, { action: 'GET_PROPERTY_INFO' }, (response: PropertyInfo) => {
                        if (chrome.runtime.lastError) {
                            if (attempts < maxAttempts) {
                                setTimeout(trySendMessage, 200);
                            } else {
                                setLoading(false);
                                setNoListing(true);
                            }
                        } else {
                            handlePropertyResponse(response);
                        }
                    });
                };

                setTimeout(trySendMessage, 100);
            }
        );
    }

    function handlePropertyResponse(response: PropertyInfo) {
        if (!response?.id) {
            setLoading(false);
            setNoListing(true);
            return;
        }
        setListingId(response.id);
        setListingTitle(response.title);
        setLoading(false);
        setNoListing(false);
        if (auth.currentUser) {
            fetchComments(response.id);
        }
    }

    // --- Actions ---
    const handlePost = useCallback(
        async (text: string, topics: string[], isAnonymous: boolean) => {
            if (!auth.currentUser || !listingId || !user) return;
            try {
                await addDoc(collection(db, 'comments'), {
                    listingId,
                    userId: user.uid,
                    nickname: user.displayName || 'User',
                    isAnonymous,
                    text,
                    topics,
                    likes: 0,
                    likedBy: [],
                    timestamp: serverTimestamp(),
                    parentId: null,
                });
                fetchComments(listingId);
            } catch (e) {
                console.error('Error adding comment:', e);
            }
        },
        [listingId, user, fetchComments]
    );

    const handleReply = useCallback(
        async (parentId: string, text: string, isAnonymous: boolean) => {
            if (!auth.currentUser || !listingId || !user) return;
            try {
                await addDoc(collection(db, 'comments'), {
                    listingId,
                    userId: user.uid,
                    nickname: user.displayName || 'User',
                    isAnonymous,
                    text,
                    topics: [],
                    likes: 0,
                    likedBy: [],
                    timestamp: serverTimestamp(),
                    parentId,
                });
                fetchComments(listingId);
            } catch (e) {
                console.error('Error adding reply:', e);
            }
        },
        [listingId, user, fetchComments]
    );

    const handleLike = useCallback(
        async (commentId: string, currentlyLiked: boolean) => {
            if (!user) return;
            const ref = doc(db, 'comments', commentId);
            try {
                if (currentlyLiked) {
                    await updateDoc(ref, { likes: increment(-1), likedBy: arrayRemove(user.uid) });
                } else {
                    await updateDoc(ref, { likes: increment(1), likedBy: arrayUnion(user.uid) });
                }
                if (listingId) fetchComments(listingId);
            } catch (e) {
                console.error('Error toggling like:', e);
            }
        },
        [user, listingId, fetchComments]
    );

    const handleDelete = useCallback(
        async (commentId: string) => {
            if (!user) return;
            try {
                await deleteDoc(doc(db, 'comments', commentId));
                if (listingId) fetchComments(listingId);
            } catch (e) {
                console.error('Error deleting comment:', e);
            }
        },
        [user, listingId, fetchComments]
    );

    return (
        <I18nContext.Provider value={{ t, lang, setLang }}>
            <div class="container">
                <Header listingId={listingId} listingTitle={listingTitle} loading={loading} />
                <AuthBar user={user} />

                {noListing ? (
                    <GuidanceView />
                ) : (
                    <>
                        <CommentsList
                            comments={comments}
                            loading={commentsLoading}
                            currentUser={user}
                            onLike={handleLike}
                            onReply={handleReply}
                            onDelete={handleDelete}
                        />
                        {user && listingId && (
                            <CommentInput onPost={handlePost} />
                        )}
                    </>
                )}
            </div>
        </I18nContext.Provider>
    );
}
