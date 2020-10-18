chrome.tabs.onUpdated.addListener(function(tab){
chrome.tabs.executeScript(tab.ib, {
		file: 'hyper.js'
});
});
