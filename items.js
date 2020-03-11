console.log(Math.random())
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
    let values = [Math.round(((Math.random()*this.cielVal)+this.floorVal)),Math.round((this.avgVal-Math.random()*(this.avgVal*.3))),Math.round((this.avgVal+Math.random()*(this.avgVal*.3))),Math.round((this.avgVal+Math.random()*(this.avgVal*.10))),Math.round((this.avgVal-Math.random()*(this.avgVal*.10)))];
       let price = values[Math.floor(Math.random()*values.length)];
       //console.log(values);
       this.price = price;
       while(this.price<this.floorVal || this.price>this.cielVal){
         this.setPrice();
       }
       return price
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
let spain = new Countries('Spain', 'spn',[gold,diamonds,silver,sugar],new Access(new Flight(false,true,true,true,true),new Sea(false,true,true,true,true), new Land(false,false,false,false,false)));
let england = new Countries('England', 'Eng',[gold,diamonds,silver,sugar],new Access(new Flight(true,true,false,true,true),new Sea(true,true,false,true,true), new Land(false,false,false,false,false)));
let canada = new Countries('canada', 'cnd',[gold,diamonds,silver,sugar],new Access(new Flight(true,true,true,false,true), new Sea(true,true,true,false,false),new Land(false,true,false,false,true)));
let mexico = new Countries('mexico','mex',[gold,diamonds,silver,sugar],new Access (new Flight(true,true,true,true,false), new Sea(true,true,true,false,true), new Land(false,true,false, true, false)));
gold.countries = ['spain','usa','england','canada','mexico'];
diamonds.countries = ['spain','usa','england','canada','mexico'];
silver.countries = ['spain','usa','england','canada','mexico'];
sugar.countries = ['spain','usa','england','canada','mexico'];
//gold.setPrice()
