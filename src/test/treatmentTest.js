/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');

const should = chai.should();
const treatment = require('../utils/treatmentWeather.js');

describe('get Temperature', () => {
  it('get Temperature', (done) => {
    const tempKelvin = treatment.treatTemperature('332.98');
    tempKelvin.should.equal('59.83');
    done();
  });
}).timeout(5000);

describe('get Sky', () => {
  it('get Sky', (done) => {
    const skyWeather = treatment.treatSky('clear sky');
    skyWeather.should.equal('céu limpo');
    done();
  });
}).timeout(5000);

describe('get Pressure', () => {
  it('get Pressure', (done) => {
    const hpaPressure = treatment.treatPressure('1025');
    hpaPressure.should.equal('1.01');
    done();
  });
}).timeout(5000);

describe('get Wind', () => {
  it('get Wind', (done) => {
    const direction = treatment.treatWind('300');
    direction.should.equal('sudeste');
    done();
  });
}).timeout(5000);

describe('get Sunrise', () => {
  it('get Sunrise', (done) => {
    const hours = treatment.treatSun('1555917368');
    hours.should.equal('7:16:08');
    done();
  });
}).timeout(5000);
