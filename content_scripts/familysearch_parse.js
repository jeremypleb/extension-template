console.log("example content script loaded");
document.body.style.border = "30px solid blue";

chrome.runtime.sendMessage({message: "hello world"}, function(response) {
    console.log(response);
});
/*
"content_scripts": [
        {
            "matches": ["*://familysearch.org/*"],
            "js": ["content_scripts/familysearch_parse.js"]
        }
    ],
*/

/*

    "background": {
        "scripts": ["background.js"],
        "persistent": false
    },
*/

//Put content_scripts to automatically run script in certain web pages, and backround to run scripts when the extension link is clicked