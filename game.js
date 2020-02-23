'use strict';
let button = document.getElementById("update");
// let saveName = function(){
//   let name = compName.value;
//
//   if (!theValue) {
//     message('Error: No value specified');
//     return;
//   }
//   return name
// }
let saveName = function(names){
  let name = names.value;
  console.log(name);
  return name;
}
button.addEventListener('click',function(){
  let names = document.getElementById('compName');
  chrome.storage.sync.set({'name': saveName(names) }
  , function(){
      company.name = name;
    })
})
let value = 'name'
chrome.storage.local.set({key: value}, function() {
          console.log('Value is set to ' + value);
        });
chrome.storage.local.get(['name'], function(result) {
          console.log('Value currently is ' + result.key);
        });
//  chrome.storage.sync.get('name',function(data){
//    console.log(data.name)
//    return data.name;
//
// });
console.log()
