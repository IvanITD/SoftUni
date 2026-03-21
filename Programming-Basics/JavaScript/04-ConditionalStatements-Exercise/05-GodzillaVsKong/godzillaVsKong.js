function GodzillaVsKong (filmBudget, statistsAmount, statistsClothingPrice) {
    // Calculate the film decor cost
    let decorCost = filmBudget * (10 / 100);

    // Calculate the total clothing cost for the statists
    let clothingCost = statistsAmount * statistsClothingPrice;

    // if statists are more than 150, apply a 10% discount on clothing cost
    if (statistsAmount > 150) {
        let discount = clothingCost * (10 / 100);
        clothingCost -= discount;
    }

    // Get the total price for the film
    let totalPrice = decorCost + clothingCost;

    // Check if the total price is within the film budget
    if (totalPrice > filmBudget) {
        let moneyNeeded = totalPrice - filmBudget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
    else {
        let moneyLeft = filmBudget - totalPrice;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

GodzillaVsKong(20000, 120, 55.5);
GodzillaVsKong(15437.62, 186, 57.99);
GodzillaVsKong(9587.88, 222, 55.68);