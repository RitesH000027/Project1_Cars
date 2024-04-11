const filterBMWAndAudi = require('../src/problem6');

const inventory = require('../inventory');


const filteredCars = filterBMWAndAudi(inventory);
console.log(JSON.stringify(filteredCars));
