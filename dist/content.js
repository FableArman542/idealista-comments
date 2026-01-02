"use strict";
(() => {
  // src/content.ts
  var getPropertyData = () => {
    const url = window.location.href;
    const idMatch = url.match(/\/imovel\/(\d+)/);
    const id = idMatch ? idMatch[1] : null;
    const titleEl = document.querySelector(".main-info__title-main");
    const title = titleEl ? titleEl.innerText : document.title;
    return { id, title };
  };
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "GET_PROPERTY_INFO") {
      const data = getPropertyData();
      sendResponse(data);
    }
  });
})();
