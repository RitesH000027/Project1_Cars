const countOlderCars = require('../src/problem5');

const inventory = require('../inventory');

const olderCarsCount = countOlderCars(inventory);
console.log(`Number of cars older than 2000: ${olderCarsCount}`);
