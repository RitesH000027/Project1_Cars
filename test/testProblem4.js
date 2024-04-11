const getAllCarYears = require('../src/problem4');

const inventory = require('../inventory');

const years = getAllCarYears(inventory);
console.log(years);
