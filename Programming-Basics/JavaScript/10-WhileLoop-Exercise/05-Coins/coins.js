function Coins(change) {
    // Creating a variable to round the change into cents
    let cents = (parseInt(change * 100));

    // Coins count variable for later use
    let coinsCount = 0;

    // While loop to calculate the number of coins needed
    while (cents > 0) {
        if ( cents >= 200) {
            // Substracting 200 from the cents
            cents -= 200;
        }
        else if (cents >= 100) {
            // Substracting 100 from the cents
            cents -= 100;
        }
        else if (cents >= 50) {
            // Substracting 50 from the cents
            cents -= 50;
        }
        else if (cents >= 20) {
            // Substracting 20 from the cents
            cents -= 20;
        }
        else if (cents >= 10) {
            // Substracting 10 from the cents
            cents -= 10;
        }
        else if (cents >= 5) {
            // Substracting 5 from the cents
            cents -= 5;
        }
        else if (cents >= 2) {
            // Substracting 2 from the cents
            cents -= 2;
        }
        else if (cents >= 1) {
            // Substracting 1 from the cents
            cents -= 1;
        }

    // Adding 1 to the coins count for each coin used
    coinsCount++;
    }
    // Printing the number of coins needed
    console.log(coinsCount);
}

Coins(1.23);
Coins(2);
Coins(0.56);
Coins(2.73);