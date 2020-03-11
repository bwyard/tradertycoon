let company = {
  name: '',
  cash: 50000,
  inventoryMax:50,
  travelSpeed:1,
  landTravel:true,
  flightTravel:false,
  seaTravel:true
};
let companySave = function(){
  for (let prop in company){
    storage.set(company);
  }
}
let companyGet = function(){
  for(let prop in company){
    storage.get(prop,function(res){
      company[prop] = res[prop]
      console.log(res.prop)
    }
  }
}

module.exports ={
  companySave,
  companyGet,
  company
}
