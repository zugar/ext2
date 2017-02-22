chrome.extension.sendRequest({ title: document.title, url: location });
console.log("LINE 2 TESTING")
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js - TEST");
		// ----------------------------------------------------------

	}
	}, 10);
});