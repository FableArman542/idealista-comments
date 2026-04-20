import { useState } from 'preact/hooks';
import { useTranslation } from '../hooks/useTranslation';

interface CommentInputProps {
    onPost: (text: string, topics: string[], isAnonymous: boolean) => void;
}

const TOPICS = ['price', 'noise', 'security', 'accesses'] as const;

export function CommentInput({ onPost }: CommentInputProps) {
    const { t } = useTranslation();
    const [text, setText] = useState('');
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [isAnonymous, setIsAnonymous] = useState(false);

    const toggleTopic = (topic: string) => {
        setSelectedTopics((prev) =>
            prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
        );
    };

    const handlePost = () => {
        const trimmed = text.trim();
        if (!trimmed) return;
        onPost(trimmed, selectedTopics, isAnonymous);
        setText('');
        setSelectedTopics([]);
        setIsAnonymous(false);
    };

    return (
        <div class="input-container">
            <div class="topic-selector">
                {TOPICS.map((topic) => {
                    const isSelected = selectedTopics.includes(topic);
                    return (
                        <span
                            key={topic}
                            class={`topic-label lbl-${topic}${isSelected ? ' selected' : ''}`}
                            onClick={() => toggleTopic(topic)}
                        >
                            {t[topic as keyof typeof t] || topic}
                        </span>
                    );
                })}
            </div>

            <div class="options-bar" style={{ padding: '0 15px', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <input
                    type="checkbox"
                    id="anon-check"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous((e.target as HTMLInputElement).checked)}
                />
                <label for="anon-check" style={{ fontSize: '11px', color: '#666', cursor: 'pointer' }}>
                    {t.postAnonymously}
                </label>
            </div>

            <div class="input-area">
                <textarea
                    id="comment-input"
                    placeholder={t.placeholder}
                    value={text}
                    onInput={(e) => setText((e.target as HTMLTextAreaElement).value)}
                />
                <button id="post-btn" onClick={handlePost}>{t.post}</button>
            </div>
        </div>
    );
}
