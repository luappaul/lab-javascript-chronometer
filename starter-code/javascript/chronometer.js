class Chronometer {
  currentTime = 0;
  currentSec = 0;
  intervalId;
  intervalMil;
  constructor() {}

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
    this.intervalMil = setInterval(() => {
      this.currentSec++;
    }, 10);
  }
  getMinutes() {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    var secondes = this.currentTime;
    return secondes - Math.floor(this.currentTime / 60) * 60;
  }

  getMilSeconds() {
    var milSecondes = this.currentSec - this.currentTime * 100;
    return milSecondes;
  }

  twoDigitsNumber(num) {
    if (num < 10) {
      return "0" + num.toString();
    } else return num.toString();
  }
  stopClick() {
    return clearInterval(this.intervalId), clearInterval(this.intervalMil);
  }
  resetClick() {
    return (this.currentTime = 0), (this.currentSec = 0);
  }
  // splitClick() {}
}
