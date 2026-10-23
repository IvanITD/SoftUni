function solution() {
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function (instruction) {
        const [command, item, qtyText] = instruction.split(' ');
        const quantity = Number(qtyText);

        if (command === 'restock') {
            stock[item] += quantity;
            return 'Success';
        }

        if (command === 'prepare') {
            const recipe = recipes[item];
            for (const ingredient in recipe) {
                if (stock[ingredient] < recipe[ingredient] * quantity) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }
            for (const ingredient in recipe) {
                stock[ingredient] -= recipe[ingredient] * quantity;
            }
            return 'Success';
        }

        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    };
}

let manager1 = solution();
console.log (manager1 ("restock flavour 50")); // Success
console.log (manager1 ("prepare lemonade 4")); // Error: not enough carbohydrate in
console.log(manager1("restock carbohydrate 10"));
console.log(manager1("restock flavour 10"));
console.log(manager1("prepare apple 1"));
console.log(manager1("restock fat 10"));
console.log(manager1("prepare burger 1"));
console.log(manager1("report"));

console.log("_____________________________________");


let manager2 = solution();
console.log(manager2("prepare turkey 1"));
console.log(manager2("restock protein 10"));
console.log(manager2("prepare turkey 1"));
console.log(manager2("restock carbohydrate 10"));
console.log(manager2("prepare turkey 1"));
console.log(manager2("restock fat 10"));
console.log(manager2("prepare turkey 1"));
console.log(manager2("restock flavour 10"));
console.log(manager2("prepare turkey 1"));
console.log(manager2("report"));