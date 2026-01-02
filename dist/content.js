"use strict";
// Function to scrape data from Idealista
const getPropertyData = () => {
    // 1. Get ID from URL (e.g. .../imovel/34683501/...)
    const url = window.location.href;
    const idMatch = url.match(/\/imovel\/(\d+)/);
    const id = idMatch ? idMatch[1] : null;
    // 2. Get Title (Idealista usually uses .main-info__title-main or h1)
    // We try a few selectors, fallback to document title
    const titleEl = document.querySelector('.main-info__title-main');
    const title = titleEl ? titleEl.innerText : document.title;
    return { id, title };
};
// Listen for messages from the Popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "GET_PROPERTY_INFO") {
        const data = getPropertyData();
        sendResponse(data);
    }
});
