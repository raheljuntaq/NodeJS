export default class Vihacle {
  engineStatus;
  engineVolume;

  constructor(engineVolume) {
    this.engineStatus = false;
    this.engineVolume = engineVolume;
  }

  turnOnEngine() {
    this.engineStatus = true;
    console.log("Engine is on");
  }

  turnOffEngine() {
    this.engineStatus = false;
    console.log("Engine is Off");
  }

  firedHorn() {
    console.log("Beep beep");
  }
}
