const Potion = require("../lib/Potion");
const Character = require('./Character');

class Player extends Character {
  constructor(name = '') {
    // call parent constructor here:
    super(name);


  this.inventory = [new Potion("health"), new Potion()];
}

//inherit prototype methods from Character here:
// Player.prototype = Object.create(Character.prototype);

getStats() {
  return{
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility

  };
};

usePotion(index) {
  const potion = this.getInventory().splice(index, 1)[0];

  switch (potion.name) {
    case "agility":
      this.agility += potion.value;
      break;
    case "health":
      this.health += potion.value;
      break;
    case "strength":
      this.strength += potion.value;
      break;
  }
};

addPotion(potion) {
  this.inventory.push(potion);
};

// Player.prototype.getAttackValue = function () {
//   const min = this.strength - 5;
//   const max = this.strength + 5;

//   return Math.floor(Math.random() * (max - min) + min);
// };

// Player.prototype.reduceHealth = function (health) {
//   this.health -= health;

//   if (this.health < 0) {
//     this.health = 0;
//   }
// };

// Player.prototype.isAlive = function () {
//   if (this.health === 0) {
//     return false;
//   }
//   return true;
// };

// Player.prototype.getHealth = function () {
//   return `${this.name}'s health is now ${this.health}!`;
// };


getInventory() {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
  }
 
};
//returns an object with various player properties one way to do it
//   this.getStats = function () {
//     return {
//       potions: this.inventory.length,
//       health: this.health,
//       strength: this.strength,
//       agility: this.agility,
//     };
//   };

//   //return the inventory array or false if empty one way to do it
//   this.getInventory = function () {
//     if (this.inventory.length) {
//       return this.inventory;
//     }
//     return false;
//   };

module.exports = Player;
