import Vehicle from "./vehicle.js";

export default class Car extends Vehicle {
  color;
  brand;
  type;

  constructor(brand, type, color, engineVolume) {
    super(engineVolume);
    this.brand = brand;
    this.type = type;
    this.color = color;
    this.engineStatus = false;
  }

  firedHorn() {
    //super adalah mengakses parent class
    super.firedHorn();
    console.log("TonTonn");
  }
  //encapsulation getters and setters properties
  setType(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }

  setBrand(brand) {
    this.brand = brand;
  }

  getBrand() {
    return this.brand;
  }

  setColor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}
