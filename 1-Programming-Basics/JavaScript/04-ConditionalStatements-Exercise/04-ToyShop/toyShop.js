function ToyShop (excursionPrice, puzzleAmount, talkingDollAmount, teddyBearAmount, minionAmount, truckAmount) {
    // Get all prices
    let puzzlePrice = 2.60;
    let talkingDollPrice = 3.00;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2.00;

    // Calculate total amount
    let totalAmount = puzzleAmount + talkingDollAmount + teddyBearAmount + minionAmount + truckAmount;

    // Calculate total price
    let totalPrice = (puzzleAmount * puzzlePrice) + (talkingDollAmount * talkingDollPrice) + (teddyBearAmount * teddyBearPrice) + (minionAmount * minionPrice) + (truckAmount * truckPrice);

    // If the total amount of toys is 50 or more, apply a 25% discount
    if (totalAmount >= 50) {
        let discount = totalPrice * (25 / 100);
        totalPrice -= discount;
    }

    // Calculate the final price after deduction 10% for rent
    let rent = totalPrice * (10 / 100);

    // Calculate the final price after deduction
    let finalPrice = totalPrice - rent;

    // Check if the final price is enough to cover the excursion price
    if (finalPrice >= excursionPrice) {
        let moneyLeft = finalPrice - excursionPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }
    else {
        let moneyNeeded = excursionPrice - finalPrice;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

// Print the result to the console
ToyShop (40.8, 20, 25, 30, 50, 10);
ToyShop (320, 8, 2, 5, 5, 1);