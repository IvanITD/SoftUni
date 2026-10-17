function juiceFlavors(input) {
    const quantities = {};
    const bottles = new Map();

    for (const line of input) {
        const [name, amount] = line.split(' => ');
        const quantity = Number(amount);

        if (!quantities[name]) {
            quantities[name] = 0;
        }

        quantities[name] += quantity;

        if (quantities[name] >= 1000) {
            const produced = Math.floor(quantities[name] / 1000);
            quantities[name] %= 1000;
            
            if (!bottles.has(name)) {
                bottles.set(name, 0);
            }

            bottles.set(name, bottles.get(name) + produced);
        }
    }

    for (const [name, count] of bottles) {
        console.log(`${name} => ${count}`);
    }
}

juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

console.log('--------------------------------');

juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);