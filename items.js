class Items {
  constructor(name,countries,floorVal,cielVal,avgVal,weight,tax) {
    this.name = name,
    this.countries = countries,
    this.floorVal = floorVal,
    this.cielVal = cielVal,
    this.avgVal = avgVal,
    this.weight = weight,
    this.tax = tax
    this.price = 0
  }

  setPrice(){
    let values = [(Math.random()*this.cielVal)+this.floorVal),(this.avgVal-Math.random()(this.avgVal*.3)),(this.avgVal+Math.random()(this.avgVal*.3)),(this.avgVal+Math.random()(this.avgVal*.10)),(this.avgVal-Math.random()(this.avgVal*.10))];
    this.price = values[Math.floor(Math.random()*values.length)];
    while(this.price<this.floorVal || this.price>this.cielVal){
      this.setPrice();
    }
  }
}


let gold = new Items(gold,[spain,usa,england,canada,mexico],100,1300,650,10,22);
let diamonds = new Items(diamonds,[spain,usa,england,canada,mexico],700,7600,3400,6,10);
let silver = new Items(silver,[spain,usa,england,canada,mexico],30,700,100,11,22);
let sugar = new Items(sugar,[spain,usa,england,canada,mexico],10,120,35)
