import { useTranslation } from '../hooks/useTranslation';

export function GuidanceView() {
    const { t } = useTranslation();

    const handleOpen = () => {
        chrome.tabs.create({ url: 'https://www.idealista.pt' });
    };

    return (
        <div class="guidance-view">
            <div class="guidance-icon">💬</div>
            <p class="guidance-text">{t.navigateMessage}</p>
            <p class="guidance-hint">{t.guidanceHint}</p>
            <button class="guidance-btn" onClick={handleOpen}>{t.openIdealista}</button>
        </div>
    );
}
