export default class Vehicle {
  engineStatus;
  engineVolume;

  constructor(engineVolume) {
    this.engineStatus = false;
    this.engineVolume = engineVolume;
  }
  turnOnEngine() {
    this.engineStatus = true;
    console.log("Engine is On");
  }
  turnOfEngine() {
    this.engineStatus = false;
    console.log("Engine is Of");
  }

  firedHorn() {
    console.log("Beep Beep");
  }
}
