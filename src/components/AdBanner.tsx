const KOFI_URL = 'https://ko-fi.com/ar_dev';

export function AdBanner() {
    const handleClick = () => {
        chrome.tabs.create({ url: KOFI_URL });
    };

    return (
        <div class="ad-banner" onClick={handleClick}>
            <span class="kofi-icon">☕</span>
            <span class="ad-text">Enjoying the extension? Buy me a coffee!</span>
        </div>
    );
}
