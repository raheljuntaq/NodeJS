import Car from "./classes/car.js";

const carList = [];
const carHonda = new Car("Honda", "red", "sedan", 3000);
const carAvanza = new Car("Toyota", "red", "MPV", 1500);
const carXenia = new Car("Toyota", "red", "MPV", 1500);

carList.push(carHonda, carAvanza, carXenia);
console.log(carList);

function findTypeCarByBrand(brand) {
  try {
    const foundedCar = carList.find(function (car) {
      return car.brand === brand;
    });
    return foundedCar.type;
  } catch (err) {
    if (err.name === "TypeError") {
      return "Brand Not Found";
    }
  }
}
console.log("=============Find Car============");
console.log(findTypeCarByBrand("Toyota"));
console.log("Harusnya Tereksekusi");
