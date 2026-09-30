function lowestPricesInCities(arr) {
    let products = {};
    for (let item of arr) {
        let [town, product, price] = item.split(' | ');
        if (!products[product]) {
            products[product] = {
                price: Number(price),
                town: town,
                product: product,
            };
        } else {
            if (products[product].price > Number(price)) {
                products[product].price = Number(price);
                products[product].town = town;
            }
        }
    }
    for (let product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);