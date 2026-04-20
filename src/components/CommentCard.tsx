import { useState } from 'preact/hooks';
import { User } from 'firebase/auth';
import { useTranslation } from '../hooks/useTranslation';
import { TranslationKeys } from '../locales';
import { UserComment } from '../types';

interface CommentCardProps {
    comment: UserComment;
    currentUser: User | null;
    onLike: (commentId: string, currentlyLiked: boolean) => void;
    onReply: (parentId: string, text: string, isAnonymous: boolean) => void;
    onDelete: (commentId: string) => void;
}

export function CommentCard({ comment, currentUser, onLike, onReply, onDelete }: CommentCardProps) {
    const { t } = useTranslation();
    const [showReply, setShowReply] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [replyAnon, setReplyAnon] = useState(false);

    const isLoggedIn = currentUser !== null;
    const currentUserId = currentUser?.uid ?? null;
    const likedByUser = currentUserId ? (comment.likedBy?.includes(currentUserId) ?? false) : false;
    const isOwner = currentUserId !== null && comment.userId === currentUserId;

    let timeString = '';
    if (comment.timestamp?.toDate) {
        const d = comment.timestamp.toDate();
        timeString = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
        timeString = 'Just now';
    }

    const displayName = comment.isAnonymous
        ? (t.anonymous || 'Anonymous')
        : comment.nickname;

    const handlePostReply = () => {
        const text = replyText.trim();
        if (!text) return;
        onReply(comment.id, text, replyAnon);
        setReplyText('');
        setReplyAnon(false);
        setShowReply(false);
    };

    const actionStyle = isLoggedIn ? undefined : { opacity: '0.5', cursor: 'not-allowed' };

    return (
        <div class="comment-card" data-id={comment.id}>
            <div class="comment-header">
                <span>{displayName}</span>
                <span style={{ fontWeight: 'normal', opacity: 0.6 }}>{timeString}</span>
            </div>

            {comment.topics?.length > 0 && (
                <div class="topic-tags">
                    {comment.topics.map((topicKey) => (
                        <span key={topicKey} class={`topic-tag topic-${topicKey}`}>
                            {t[topicKey as TranslationKeys] || topicKey}
                        </span>
                    ))}
                </div>
            )}

            <div class="comment-body">{comment.text}</div>

            <div class="comment-actions">
                <span
                    class={`action-btn like-btn ${likedByUser ? 'liked' : ''}`}
                    style={actionStyle}
                    onClick={() => isLoggedIn && onLike(comment.id, likedByUser)}
                >
                    ♥ {comment.likes || 0}
                </span>
                <span
                    class="action-btn reply-btn"
                    style={actionStyle}
                    onClick={() => isLoggedIn && setShowReply(!showReply)}
                >
                    {t.reply || 'Reply'}
                </span>
                {isOwner && (
                    <span
                        class="action-btn delete-btn"
                        style={{ color: 'red' }}
                        onClick={() => {
                            if (confirm('Are you sure you want to delete this comment?')) {
                                onDelete(comment.id);
                            }
                        }}
                    >
                        Delete
                    </span>
                )}
            </div>

            {showReply && (
                <div class="reply-input-container" style={{ display: 'flex' }}>
                    <textarea
                        class="reply-textarea"
                        placeholder={t.placeholder}
                        value={replyText}
                        onInput={(e) => setReplyText((e.target as HTMLTextAreaElement).value)}
                        // eslint-disable-next-line jsx-a11y/no-autofocus
                        autoFocus
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <input
                                type="checkbox"
                                checked={replyAnon}
                                onChange={(e) => setReplyAnon((e.target as HTMLInputElement).checked)}
                            />
                            <label style={{ fontSize: '10px', color: '#666' }}>
                                {t.postAnonymously || 'Post anonymously'}
                            </label>
                        </div>
                        <div class="reply-actions">
                            <button class="btn-small btn-cancel" onClick={() => setShowReply(false)}>
                                {t.cancel || 'Cancel'}
                            </button>
                            <button class="btn-small btn-post" onClick={handlePostReply}>
                                {t.post}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {comment.replies && comment.replies.length > 0 && (
                <div class="replies-container">
                    {comment.replies.map((reply) => (
                        <CommentCard
                            key={reply.id}
                            comment={reply}
                            currentUser={currentUser}
                            onLike={onLike}
                            onReply={onReply}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
