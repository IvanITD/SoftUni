function Flowers(chrysanthemums, roses, tulips, season, holiday) {
        // Variables for the flower prices
        let chrysanthemumsPrice = 0.0
        let rosesPrice = 0.0;
        let tulipsPrice = 0.0;

    // Added variables for the discount from each flower bouquet
    let bouquetDiscount = 0.0;

    // Check what the season is, in order to determine the price for each flower
    if (season == "Spring" || season == "Summer") {
        chrysanthemumsPrice = 2.00;
        rosesPrice = 4.10;
        tulipsPrice = 2.50;
    }
    else if (season == "Autumn" || season == "Winter") {
        chrysanthemumsPrice = 3.75;
        rosesPrice = 4.50;
        tulipsPrice = 4.15;
    }

    // Calculate the total price for each flower type
    let chrysanthemumsTotal = chrysanthemums * chrysanthemumsPrice;
    let rosesTotal = roses * rosesPrice;
    let tulipsTotal = tulips * tulipsPrice;

    // Check the total price for all flowers 
    let totalPrice = chrysanthemumsTotal + rosesTotal + tulipsTotal;

    // Check if it's a holiday
    if (holiday == "Y") {
        totalPrice += totalPrice * 0.15;
    }
    else if (holiday == "N") {
        totalPrice += 0;
    }

    // Check the total amount of all flowers
    let totalFlowers = chrysanthemums + roses + tulips;

    if (tulips > 7 && season == "Spring") {
        bouquetDiscount = 0.05;
        totalPrice -= totalPrice * bouquetDiscount;
    }
    else if (roses >= 10 && season == "Winter") {
        bouquetDiscount = 0.10;
        totalPrice -= totalPrice * bouquetDiscount;
    }

    // CHeck if the total amount of all flowers is more than 20
    if (totalFlowers > 20) {
        bouquetDiscount = 0.20;
        totalPrice -= totalPrice * bouquetDiscount;
    }

    // Add 2 lv. for the arrangement
    totalPrice += 2;

    // Print the total price to the console
    console.log(totalPrice.toFixed(2));
}

Flowers(2, 4, 8, "Spring", "Y");
Flowers(3, 10, 9, "Winter", "N");
Flowers(10, 10, 10, "Autumn", "N");