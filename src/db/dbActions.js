const Sport = require('../models/Sport');
const Interval = require('../models/Interval');

module.exports = {

  saveAllSports() {
    return new Promise(() => {
      this.saveLol().then(() => {
        this.saveWindsurf().then(() => {
          this.saveKitesurf().then(() => {
            this.saveSurf().then(() => {
              this.saveStandUpPaddle().then(() => {
                this.saveVela().then(() => {
                resolve();
                });
              });
            });
          });
        });
      });;
    });
  },

  saveWindsurf() {
    const sport = new Sport('Windsurf');
    let temperatureInterval = new Interval('24', '20');
    sport.appendTemperatureLimitAray(temperatureInterval);
    temperatureInterval = new Interval('35', '30');
    sport.appendTemperatureLimitAray(temperatureInterval);
    const humidityInterval = new Interval('70', '21');
    sport.appendHumidityLimitAray(humidityInterval);
    let windSpeedInterval = new Interval('15.42', '10.794');
    sport.appendwindSpeedLimitAray(windSpeedInterval);
    windSpeedInterval = new Interval('25.7', '21.074');
    sport.appendwindSpeedLimitAray(windSpeedInterval);

    sport.findMe().then((isFound) => {
      if (!isFound) {
        sport.saveSport();
      }
    });
  },

  saveKitesurf() {
    return new Promise((resolve) => {
      const sport = new Sport('Kitesurf');
      const temperatureInterval = new Interval('24', '15');
      const humidityInterval = new Interval('70', '21');
      let windSpeedInterval = new Interval('10.28', '0');
      sport.appendTemperatureLimitAray(temperatureInterval);
      sport.appendHumidityLimitAray(humidityInterval);
      sport.appendwindSpeedLimitAray(windSpeedInterval);
      windSpeedInterval = new Interval('25.7', '15.934');
      sport.appendwindSpeedLimitAray(windSpeedInterval);
  
      sport.findMe().then((isFound) => {
        if (!isFound) {
          sport.saveSport().then(() => { resolve(); });
        }
      });
    });
  },

  saveSurf() {
    return new Promise((resolve) => {
      const sport = new Sport('Surf');
      const temperatureInterval = new Interval('35', '25');
      const humidityInterval = new Interval('70', '21');
      const windSpeedInterval = new Interval('20.56', '10.794');
      sport.appendTemperatureLimitAray(temperatureInterval);
      sport.appendHumidityLimitAray(humidityInterval);
      sport.appendwindSpeedLimitAray(windSpeedInterval);
  
      sport.findMe().then((isFound) => {
        if (!isFound) {
          sport.saveSport().then(() => { resolve(); });
        }
      });
    });
  },

  saveStandUpPaddle() {
    return new Promise((resolve) => {
      const sport = new Sport('Stand Up Paddle');
      const temperatureInterval = new Interval('29', '20');
      const humidityInterval = new Interval('70', '21');
      const windSpeedInterval = new Interval('20.56', '10.794');
      sport.appendTemperatureLimitAray(temperatureInterval);
      sport.appendHumidityLimitAray(humidityInterval);
      sport.appendwindSpeedLimitAray(windSpeedInterval);
  
      sport.findMe().then((isFound) => {
        if (!isFound) {
          sport.saveSport().then(() => { resolve(); });
        }
      });
    });
  },

  saveVela() {
    return new Promise((resolve) => {
      const sport = new Sport('Vela');
      let temperatureInterval = new Interval('24', '15');
      const humidityInterval = new Interval('70', '40');
      let windSpeedInterval = new Interval('10.28', '0');
      sport.appendTemperatureLimitAray(temperatureInterval);
      sport.appendHumidityLimitAray(humidityInterval);
      sport.appendwindSpeedLimitAray(windSpeedInterval);
      windSpeedInterval = new Interval('25.78', '21.074');
      temperatureInterval = new Interval('35', '30');
      sport.appendTemperatureLimitAray(temperatureInterval);
      sport.appendwindSpeedLimitAray(windSpeedInterval);
  
      sport.findMe().then((isFound) => {
        if (!isFound) {
          sport.saveSport().then(() => { resolve(); });
        }
      });
    });
  },

  saveLol() {
    return new Promise((resolve) => {

      const sport = new Sport('leol');
      const temperatureInterval = new Interval('3000', '-3000');
      const humidityInterval = new Interval('3000', '-3000');
      const windSpeedInterval = new Interval('3000', '-3000');
      sport.appendTemperatureLimitAray(temperatureInterval);
      sport.appendHumidityLimitAray(humidityInterval);
      sport.appendwindSpeedLimitAray(windSpeedInterval);
  
      sport.findMe().then((isFound) => {
        if (!isFound) {
          sport.saveSport().then(() => { resolve(); });
        }
      });
    });
  },

  printSport(sportName) {
    const sport = new Sport(sportName);
    sport.findMe().then((isFound) => {
      if (isFound) {
        process.exit();
      } else {
        process.exit();
      }
    });
  },

  deleteSport(sportName) {
    new Sport(sportName).findMe().then((isFound) => {
      if (isFound) {
        new Sport(sportName).deleteMe().then(() => {
          new Sport(sportName).findMe().then((isFound2) => {
            if (isFound2) {
              process.exit();
            } else {
              process.exit();
            }
          });
        });
      } else {
        process.exit();
      }
    });
  },
};
