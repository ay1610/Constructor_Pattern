function Bike( type,model,year, miles ) {
 
  this.type = type;
  this.model = model;
  this.year = year;
  this.miles = miles;
 
  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}
 
// Usage:
 
// We can create new instances of the  Vechile
var hayabusa = new Bike( "Sports","Suzuki Hayabusa", 2014, 2000 );
var vmax = new Car( "Cruiser","Yamaha V-max", 2010, 10000 );
 

console.log( hayabusa.toString() );
console.log( vmax.toString() );