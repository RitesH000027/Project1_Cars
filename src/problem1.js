function findCarById(inventory, id1) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id1) {
            return inventory[i];
        }
    }
    return null;
}

module.exports = findCarById;
