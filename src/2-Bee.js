const Grub = require('./1-Grub');

class Bee extends Grub{
  // TODO..

  constructor(){
    super();
    this.age = 5;
    this.color = "yellow";
    this.food = "jelly";
    this.job = "Keep on growing";
  };
}

const bee = new Bee();
bee.eat(); 

module.exports = Bee;
