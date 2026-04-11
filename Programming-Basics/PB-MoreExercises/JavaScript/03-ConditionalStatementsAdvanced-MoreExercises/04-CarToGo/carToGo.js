function CarToGo(budget, season) {
    // Variables for later use
    let classType = "";
    let carType = "";
    let carPrice = 0.0;

    // Check if budget is less than 100
    if (budget <= 100) {
        // If the budget us <= 100 then the class type is Eco
        classType = "Economy class";

        // Check what season is
        if (season == "Summer") {
            // If the season is summer then the car type is Cabrio
            carType = "Cabrio";

            // The price is 35% from the budget
            carPrice = budget * 0.35;
        }
        else if (season == "Winter") {
            // If the season is winter then the car type is Jeep
            carType = "Jeep";

            // The price is 65% from the budget
            carPrice = budget * 0.65;
        }
    }
    else if (budget > 100 && budget <= 500) {
        // If the budget is > 100 and <= 500 then the class type is Compact
        classType = "Compact class";

        // Check what season is
        if (season == "Summer") {
            // If the season is summer then the car is type is Cabrio
            carType = "Cabrio";

            // The price is 45% from the budget
            carPrice = budget * 0.45;
        }
        else if (season == "Winter") {
            // If the season is winter then the car type is Jeep
            carType = "Jeep";

            // The price is 80% from the budget
            carPrice = budget * 0.80;
        }
    }
    else if (budget > 500) {
        // If the budget is > 500 then the class type is Luxury
        classType = "Luxury class";

        if (season == "Summer" || season == "Winter") {
            // If the season is summer or winter then the car type is Jeep
            carType = "Jeep";

            // The price is 90% from the budget
            carPrice = budget * 0.90;
        }
    }

    // Print the result to the console
    console.log(classType);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

CarToGo(450, "Summer");
CarToGo(450, "Winter");
CarToGo(1010, "Summer");
CarToGo(99.99, "Summer");
CarToGo(1010, "Winter");
CarToGo(70.50, "Winter");