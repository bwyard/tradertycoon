class Items {
  constructor(name,floorVal,cielVal,avgVal,weight,tax) {
    this.name = name,
    this.floorVal = floorVal,
    this.cielVal = cielVal,
    this.avgVal = avgVal,
    this.weight = weight,
    this.tax = tax
    this.price = 0
  }

  setPrice(){
    let values = [((Math.random()*this.cielVal)+this.floorVal),(this.avgVal-Math.random()(this.avgVal*.3)),(this.avgVal+Math.random()(this.avgVal*.3)),(this.avgVal+Math.random()(this.avgVal*.10)),(this.avgVal-Math.random()(this.avgVal*.10))];
    this.price = values[Math.floor(Math.random()*values.length)];
    while(this.price<this.floorVal || this.price>this.cielVal){
      this.setPrice();
    }
  }
}


let gold = new Items('gold',100,1300,650,10,22);
let diamonds = new Items('diamonds',700,7600,3400,6,10);
let silver = new Items('silver',30,700,100,11,22);
let sugar = new Items('sugar',10,120,35)


class Countries {
  constructor(name,abbreviation,includedItems,access)
  {
    this.name = name,
    this.abbreviation = abbreviation,
    this.includedItems = includedItems,
    this.access = access
  }
}

class Access {
  constructor(flight,sea,land){
    this.flight = flight,
    this.sea = sea,
    this.land = land
  }
}

class AccessCountries{
  constructor(spain,usa,england,canada,mexico){
    this.spain = spain,
    this.usa = usa,
    this.england = england,
    this.canada = canada,
    this.mexico = mexico
  }

}
class Flight extends AccessCountries{
  constructor(spain,usa,england,canada,mexico){
    super(spain,usa,england,canada,mexico);
  }
}
class Land extends AccessCountries{
  constructor(spain,usa,england,canada,mexico){
    super(spain,usa,england,canada,mexico);
  }
}
class Sea extends AccessCountries{
  constructor(spain,usa,england,canada,mexico){
    super(spain,usa,england,canada,mexico);
  }
}

let usa = new Countries('USA', 'usa',[gold,diamonds,silver,sugar], new Access(new Flight(true,false,true,true,true),new Sea(true,false,true,true,true),new Land(false,false,false,true,true)));

gold.countries = ['spain',usa,'england','canada','mexico'];
diamonds.countries = ['spain',usa,'england','canada','mexico'];
silver.countries = ['spain',usa,'england','canada','mexico'];
sugar.countries = ['spain',usa,'england','canada','mexico'];

console.log(usa);

let company = {};
