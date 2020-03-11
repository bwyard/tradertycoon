'use strict';
let value ='fuck this shit'
chrome.storage.local.set({pop: value}, function() {
          console.log('Value is set to ' + value);
        });
chrome.storage.local.get('pop',function(res){
  console.log(res.pop);
})
chrome.storage.sync.set({'myvalue': true});
chrome.storage.sync.get('myvalue', function(res){
  console.log(res.myvalue);
})

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: chrome.runtime.getURL("game.html"),
    type: "popup",
    width: 480,
    height: 540
  });
});
