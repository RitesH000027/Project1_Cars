function countCarsOlderThanYear(inventory, year = 2000) {
    let count = 0;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_year < year) {
            count++;
        }
    }
    return count;
}

module.exports = countCarsOlderThanYear;

