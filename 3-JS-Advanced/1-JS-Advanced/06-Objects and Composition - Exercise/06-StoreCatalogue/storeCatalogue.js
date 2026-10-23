function storeCatalogue(arr) {
    let products = {};
    for (let item of arr) {
        let [product, price] = item.split(' : ');
        if (!products[product]) {
            products[product] = {
                price: Number(price),
                product: product
            }
        } else {
            if (products[product].price > Number(price)) {
                products[product].price = Number(price);
            }
        }
    }
    let sortedProducts = Object.keys(products).sort((a, b) => a.localeCompare(b));
    let lastLetter = '';
    for (let product of sortedProducts) {
        let letter = product[0];

        if (letter !== lastLetter) {
            console.log(letter);
            lastLetter = letter;
        }
        console.log(`${product}: ${products[product].price}`)
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
console.log('--------------------------------');
storeCatalogue([
    'Banana : 2', 
    'Rubic\'s Cube : 5', 
    'Raspberry Pi : 4999', 
    'Rolex : 100000', 
    'Rollon : 10', 
    'Rali Car : 2000000', 
    'Pesho : 0.000001', 
    'Barrel : 10'
]);