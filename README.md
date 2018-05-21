# extension-template

A simple template to build a chrome extension. Icons to display are in `icons`
and content_scripts are in `content_scripts`
If you want it to be compatible with firefox, don't submit a form as a POST and don't use relative paths when using the `windows.fetch` function

When submitting new versions to the chrome/firefox store, make sure to increment your version in the manifest.json file

Remember that many of the chrome.* extension API's are not available in content scripts (content scripts include those specified in manifest.json and anything run by `chrome.tabs.executeScript()`)