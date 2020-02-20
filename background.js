'use strict';



chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: chrome.runtime.getURL("game.html"),
    type: "popup",
    width: 480,
    height: 540
  });
});
