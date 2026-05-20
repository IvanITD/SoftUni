function FootballKit(tShirtPrice, requiredPriceToWinBall) {
    // Check the products price
    let shortsPrice = tShirtPrice * (75 / 100); // Shorts Price
    let socksPrice = shortsPrice * (20 / 100); // Socks Price
    let shoesPrice = (tShirtPrice + shortsPrice) * 2; // Shoes Price

    // Total price of all products
    let totalPrice = tShirtPrice + shortsPrice + socksPrice + shoesPrice; 

    // Total price after the discounts
    let totalPriceAfterDiscount = totalPrice - (totalPrice * (15 / 100));

    // Check whether Pepi has enough money to get the present
    if (totalPriceAfterDiscount >= requiredPriceToWinBall) {
        // Print the result to the console
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalPriceAfterDiscount.toFixed(2)} lv.`);
    }
    else if (totalPriceAfterDiscount < requiredPriceToWinBall) {
        // Calculate the needed money
        let neededMoney = requiredPriceToWinBall - totalPriceAfterDiscount;
        
        // Print the result to the console
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`);

    }
}

FootballKit(25, 100);
FootballKit(55, 310);