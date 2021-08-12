import * as chrome from "../../wp-includes/js/media-audiovideo";

chrome.runtime.onMessage.addListener(function (rq, sender, sendResponse) {
    // setTimeout to simulate any callback (even from storage.sync)
    setTimeout(function () {
        sendResponse({status: true});
    }, 1);
    // return true;  // uncomment this line to fix error
});

document.addEventListener("DOMContentLoaded", () => {
    chrome.extension.sendMessage({action: "ping"}, function (resp) {
        console.log(JSON.stringify(resp));
    });
});