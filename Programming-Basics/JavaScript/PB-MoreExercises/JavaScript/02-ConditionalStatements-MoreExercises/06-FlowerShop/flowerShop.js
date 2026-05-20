function FlowerShop(magnolias, hyacinths, roses, cacti, giftPrice) {
    // Flower Prices
    let magnoliasPrice = parseFloat(3.25);
    let hyacinthsPrice = parseFloat(4.00);
    let rosesPrice = parseFloat(3.50);
    let cactiPrice = parseFloat(8.00);

    // 5% tax
    let tax = parseFloat(0.05);

    // Each flower price multiplied by the quantity
    let magnoliasTotal = parseFloat(magnolias * magnoliasPrice);
    let hyacinthsTotal = parseFloat(hyacinths * hyacinthsPrice);
    let rosesTotal = parseFloat(roses * rosesPrice);
    let cactiTotal = parseFloat(cacti * cactiPrice);

    // Total Flower Price
    let totalFlowerPrice = parseFloat(magnoliasTotal + hyacinthsTotal + rosesTotal + cactiTotal);

    // Total Price after tax
    let taxedPrice = parseFloat(totalFlowerPrice - (totalFlowerPrice * tax));

    // Checking if the money is enough
    if (taxedPrice >= giftPrice) {
        // Calculating the check if there's enough money
        let moneyLeft = parseFloat(taxedPrice - giftPrice);

        // Printing the result to the console
        console.log(`She is left with ${Math.floor(moneyLeft)} leva.`);
    }
    else {
        // Calculating to check if there's enough money
        let moneyNeeded = parseFloat(giftPrice - taxedPrice);

        // Printing the result to the console
        console.log(`She will have to borrow ${Math.ceil(moneyNeeded)} leva.`);
    }
}

FlowerShop(2,3,5,1,50);
FlowerShop(15,7,5,10,100);