// Define the data structure we want to send to the popup
interface PropertyData {
    id: string | null;
    title: string;
}

// Function to scrape data from Idealista
const getPropertyData = (): PropertyData => {
    // 1. Get ID from URL — supports all idealista domains:
    //    PT: /imovel/12345/  ES: /inmueble/12345/  IT: /immobile/12345/
    const url = window.location.href;
    const idMatch = url.match(/\/(?:imovel|inmueble|immobile)\/(\d+)/);
    const id = idMatch ? idMatch[1] : null;

    // 2. Get Title (Idealista usually uses .main-info__title-main or h1)
    // We try a few selectors, fallback to document title
    const titleEl = document.querySelector('.main-info__title-main') as HTMLElement;
    const title = titleEl ? titleEl.innerText : document.title;

    return { id, title };
};

// Listen for messages from the Popup
chrome.runtime.onMessage.addListener((request: any, sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {
    if (request.action === "GET_PROPERTY_INFO") {
        const data = getPropertyData();
        sendResponse(data);
    }
});