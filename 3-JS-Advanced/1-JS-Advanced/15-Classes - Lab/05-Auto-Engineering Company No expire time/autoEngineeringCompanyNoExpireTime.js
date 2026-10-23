function solve (input) {
    const brands = new Map();

    for (const line of input) {
        const [brand, model, count] = line.split(' | ');
        const produced = Number(count);

        if (!brands.has(brand)) {
            brands.set(brand, new Map());
        }

        const models = brands.get(brand);

        if (!models.has(model)) {
            models.set(model, 0);
        }

        models.set(model, models.get(model) + produced); 
    }

    for (const [brand, models] of brands) {
        console.log(brand);

        for (const [model, produced] of models) {
            console.log(`###${model} -> ${produced}`);
        }
    }
}


solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);