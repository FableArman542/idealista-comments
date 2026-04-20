import { User } from 'firebase/auth';
import { useTranslation } from '../hooks/useTranslation';
import { UserComment } from '../types';
import { CommentCard } from './CommentCard';

interface CommentsListProps {
    comments: UserComment[];
    loading: boolean;
    currentUser: User | null;
    onLike: (commentId: string, currentlyLiked: boolean) => void;
    onReply: (parentId: string, text: string, isAnonymous: boolean) => void;
    onDelete: (commentId: string) => void;
}

export function CommentsList({ comments, loading, currentUser, onLike, onReply, onDelete }: CommentsListProps) {
    const { t } = useTranslation();

    if (loading) {
        return (
            <div class="comments-area">
                <div class="loading-spinner">Loading...</div>
            </div>
        );
    }

    if (comments.length === 0) {
        return (
            <div class="comments-area">
                <div class="empty-state">{t.noComments}</div>
            </div>
        );
    }

    return (
        <div class="comments-area">
            {comments.map((comment) => (
                <CommentCard
                    key={comment.id}
                    comment={comment}
                    currentUser={currentUser}
                    onLike={onLike}
                    onReply={onReply}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
