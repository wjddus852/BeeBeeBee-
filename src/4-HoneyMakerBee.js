const Bee = require('./2-Bee');

class HoneyMakerBee extends Bee{
  constructor(age = 10, color, food, job = 'make honey') {
    super(age, color, food, job);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot += 1;
  }

  giveHoney() {
    this.honeyPot -= 1;
  }
}

module.exports = HoneyMakerBee;