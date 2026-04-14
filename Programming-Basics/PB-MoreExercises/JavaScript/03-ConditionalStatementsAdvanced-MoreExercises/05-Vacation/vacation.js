function Vacation(budget, season) {
    // Create variables for later use
    let placeToStay = "";
    let location = "";
    let price = 0.0;
    
    // Start checking on the budget
    if (budget <= 1000) {
        // The place will be Camp
        placeToStay = "Camp";

        // Check what the season will be
        if (season === "Summer") {
            // The location will be Alaska
            location = "Alaska";

            // The amount from the budget will be 65%
            price = budget - (budget * (65 / 100));

        }
        else if (season === "Winter") {
            // The location will be Morocco
            location = "Morocco";

            // The amount from the budget will be 45%
            price = budget - (budget * (45 / 100));
        }
    }
    else if (budget > 1000 && budget <= 3000) {
        // The place will be Hut
        placeToStay = "Hut";
        
        // Check what season will be
        if (season === "Summer") {
            // The location will be Alaska
            location = "Alaska";

            // The amount from the budget will be 80%
            price = budget - (budget * (80 / 100));
        }
        else if (season === "Winter") {
            // The location will be Morocco
            location = "Morocco";

            // The amount from the budget will be 60%
            price = budget - (budget * (60 / 100));
        }
    }
    else if (budget > 3000) {
        // The place will be Hotel
        placeToStay = "Hotel";

        // Check what season will be
        if (season === "Summer") {
            // The location will be Alaska
            location = "Alaska";

            // The amount from the budget will be 90%
            price = budget - (budget * (90 / 100));
        }
        else if (season === "Winter") {
            // The location will be Morocco
            location = "Morocco";

            // The amount from the budget will be 90%
            price = budget - (budget * (90 / 100));
        }
    }
    // Make the total calculation from the budget and price
    let total = budget - price;
    // Print the result to the console
    console.log(`${location} - ${placeToStay} - ${total.toFixed(2)}`);
}

Vacation(800, "Summer");
Vacation(799.50, "Winter");
Vacation(1100, "Summer");
Vacation(2543.99, "Winter");
Vacation(3460, "Summer");
Vacation(5000, "Winter");