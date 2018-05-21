chrome.browserAction.onClicked.addListener((tab) => {
    parsePage(tab);
});

function parsePage(tab) {
    console.log("alert from background.js");

    chrome.tabs.executeScript({file: "content_scripts/familysearch_parse.js"}, function() {
        console.log("content loaded");
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('request', request);
    console.log('sender', sender);
    sendResponse('hi there');
});