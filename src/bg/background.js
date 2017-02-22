// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

//REF:
//http://stackoverflow.com/questions/18158297/blocking-request-in-chrome
//https://developer.chrome.com/extensions/webRequest
//https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest/onBeforeRequest

// match pattern for the URLs to block / redirect
var pattern = ["*://*.boto.com/*", "*://*.gogo.com/*", "*://*.tests.com/*", "*://*.example.com/*"];

// redirect function
// returns an object with a property `redirectURL`
// set to the new URL
function redirect(requestDetails) {
  console.log("Redirecting...........: ");
  return {
    //redirectUrl: "http://www.blocked.com"
    page: "src/blockedpage/blockedpage.html"
  };
}

// cancel function returns an object
// which contains a property `cancel` set to `true`
function cancel(requestDetails) {  
  console.log("Canceling................ ");
  alert('Cancelling.....');
  return {cancel: true};
}

// add the listener,
// passing the filter argument and "blocking"
chrome.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls: pattern},
  ["blocking"]
);