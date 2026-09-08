function TruckDriver(season, monthKm) {
    // Creating variables for later use
    let pricePerKm = 0.0;
    
    // Check the kilometers per month
    if (monthKm <= 5000) {
        // Check what season is it
        if (season === "Spring" || season === "Autumn") {
            // Price per km is 0.75lv
            pricePerKm = monthKm * 0.75;
        }
        else if (season === "Summer") {
            // Price per km is 0.90lv
            pricePerKm = monthKm * 0.90;
        }
        else if (season === "Winter") {
            // Price per km is 1.05lv
            pricePerKm = monthKm * 1.05;
        }
    }
    else if (monthKm > 5000 && monthKm <= 10000) {
        // Check what season is it
        if (season === "Spring" || season === "Autumn") {
            // Price per km is 0.95lv
            pricePerKm = monthKm * 0.95;
        }
        else if (season === "Summer") {
            // Price per km is 1.10lv
            pricePerKm = monthKm * 1.10;
        }
        else if (season === "Winter") {
            // Price per km is 1.25lv
            pricePerKm = monthKm * 1.25;
        }
    }
    else if (monthKm > 10000 && monthKm <= 20000) {
        // Check what season is it
        if (season === "Spring" || season === "Autumn" || season === "Summer" || season === "Winter") {
            // Price per km is 1.45lv
            pricePerKm = monthKm * 1.45;
        }
    }
    // Because each season has 4 months we multiply by 4
    let forEachSeason = pricePerKm * 4;

    // 10% taxes from the pricePerKm to get the total remaining amount
    let tax = forEachSeason * (10 / 100);

    // Get the driver's salary after being taxed
    let salary = forEachSeason - tax;

    // Print the result to the console
    console.log(salary.toFixed(2));
}

TruckDriver("Summer", 3455);
TruckDriver("Winter", 4350);
TruckDriver("Winter", 5678);
TruckDriver("Winter", 16042);
TruckDriver("Spring", 1600);
TruckDriver("Autumn", 8600);
TruckDriver("Spring", 16942);