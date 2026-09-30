function heroicInventory(arr) {
    let heroes = [];
    for (let hero of arr) {
        if (hero.trim() === '') {
            continue;
        }
        let [name, level, items] = hero.split(' / ');
        let itemsList = items ? items.split(', ') : [];
        heroes.push({ name: name, level: Number(level), items: itemsList });
    }
    return JSON.stringify(heroes)
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']));
console.log('--------------------------------');
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));