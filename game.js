console.log(Math.random())
var storage = chrome.storage.sync;
let companyObj = {
  name: '',
  cash: 50000,
  inventoryMax:50,
  travelSpeed:1,
  landTravel:true,
  flightTravel:false,
  seaTravel:true,
  currentLocation: usa
};
let companySave = function(companyObj){
  for (let prop in companyObj){
    storage.set({[prop]: companyObj.prop})
  }
}
let companyGet = function(property){
  if (property === undefined){
  for(let prop in companyObj){
    storage.get(prop,function(res){
      companyObj[prop] = res[prop]
    })
  }
}else {
  storage.get(property,function(result){
    return result[property];
  })
}
}
let listItems = function(country){
  let itemsArr = country.includedItems;
  for (let itemsOfList of itemsArr){
   console.log(itemsOfList.setPrice() + 'setprice');
   console.log(itemsOfList)
    //itemsOfList.price = 4000
    console.log(itemsOfList['price'])
  }
  


}
window.onload = function(){
  let nameGet = ''
  storage.get('name', function (res){
     nameGet = res.name
  });
  if (nameGet !== undefined) {
  let welcome = document.getElementById('welcome');
  welcome.style.visibility = 'hidden'
  listItems(usa);
  }
}
// let companyObj = {}
// companyObj.names ='blank'
// companyObj.money = '50000'
// storage.set(companyObj,function(){
//   console.log('tis set')
// });
storage.get('name',function(res){
  //console.log(res.name);
})
storage.get('money',function(res){
//  console.log(res.money)
})
let button = document.getElementById("update");
let compName = document.getElementById('compName')
let saveName = function(){
  let name = compName.value;

  if (!theValue) {
    message('Error: No value specified');
    return;
  }
  return name
}
button.addEventListener('click',function(){
  let name = compName.value
  storage.set({name: compName.value},function(){
    companyObj.name = name;
  //  console.log(compName.value);
  })
    storage.get('name',function(result){
      //console.log(`value currently is ${result.name}.`);
    });
    companySave(companyObj);
    companyGet;
});
// let value='value'
// chrome.storage.local.set({pop: value}, function() {
//           console.log('Value is set to ' + value);
//         });
// chrome.storage.local.get(['name'], function(result) {
//           console.log('Value currently is ' + result.key);
//         });
//  chrome.storage.sync.get('name',function(data){
//    console.log(data.name)
//    return data.name;
//
// });                                                                                                                                                                                                                                                                                                                                                                                                                                    
