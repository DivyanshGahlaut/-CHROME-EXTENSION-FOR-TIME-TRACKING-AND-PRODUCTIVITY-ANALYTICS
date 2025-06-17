let currentSite = '';
let startTime = Date.now();

chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, tab => {
        trackTime(tab.url);
    });
});

function trackTime(newUrl) {
    const timeSpent = Date.now() - startTime;
    if (currentSite) {
        chrome.storage.local.get([currentSite], (res) => {
            const total = (res[currentSite] || 0) + timeSpent;
            chrome.storage.local.set({ [currentSite]: total });
        });
    }
    currentSite = new URL(newUrl).hostname;
    startTime = Date.now();
}