import Vihacle from "./vehicle.js";

export default class Car extends Vihacle {
  type;
  color;
  brand;

  constructor(brand, color, type, engineVolume) {
    super(engineVolume);
    this.brand = brand;
    this.color = color;
    this.type = type;
  }

  firedHorn() {
    console.log("TON TON");
  }
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
}
