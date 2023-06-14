import Car from "./classes/car.js";

//assign class properties1
const mobil = new Car();
mobil.brand = "Toyota";
mobil.type = "Sedan";
mobil.color = "green";
mobil.engineVolume = 1000;

//assign class properties2
const mobil2 = new Car();
mobil2.brand = "Honda";
mobil2.type = "SUV";
mobil2.color = "green";
mobil2.engineVolume = 1500;

mobil.turnOnEngine();
mobil.turnOfEngine();

//function object constructor
const mobil3 = new Car("Daihatsu", "MPV", "White", 2000);

//output object variables
console.log(mobil, mobil2, mobil3);

//output object properties
mobil.firedHorn();

//assign encapsulasion properties
mobil.setBrand("Lexus");
mobil.setType("Sedan");
console.log(mobil);
console.log(mobil.getBrand());
