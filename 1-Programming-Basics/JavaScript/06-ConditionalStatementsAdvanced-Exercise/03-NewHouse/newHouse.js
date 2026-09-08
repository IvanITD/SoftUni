function NewHouse(typeFlowers, amountFlowers, budget) {
    // Create a variable for later use
    let total = 0.0;

    // Check what type of flower it is
    switch (typeFlowers) {
        case "Roses":
            total = amountFlowers * 5.0;

            // If the Roses are more than 80, then 10% discount on total price
            if (amountFlowers > 80) {
                total -= total * (10 / 100);
            }
            break;

        case "Dahlias":
            total = amountFlowers * 3.80;

            // If the Dahlias are more than 90, then 15% discount on total price
            if (amountFlowers > 90) {
                total -= total * (15 / 100);
            }
            break;

        case "Tulips":
            total = amountFlowers * 2.80;

            // If the Tulips are more than 80, then 15% discount on total price
            if (amountFlowers > 80) {
                total -= total * (15 / 100);
            }
            break;

        case "Narcissus":
            total = amountFlowers * 3;

            // If the Narcissus are more than 120, then increase with 15% more on total price
            if (amountFlowers < 120) {
                total += total * (15 / 100);
            }
            break;

        case "Gladiolus":
            total = amountFlowers * 2.50;

            // If the Gladiolus are more than 80, then increase with 20% more on total price
            if (amountFlowers < 80) {
                total += total * (20 / 100);
            }
            break;
    }
    // Check if the budget is enough
    if (total <= budget) {
        let remainingMoney = budget - total;
        console.log(`Hey, you have a great garden with ${amountFlowers} ${typeFlowers} and ${remainingMoney.toFixed(2)} leva left.`);
    }
    else {
        let neededMoney = total - budget;
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
    }
}

NewHouse("Roses", 55, 250);
NewHouse("Tulips", 88, 260);
NewHouse("Narcissus", 119, 360);