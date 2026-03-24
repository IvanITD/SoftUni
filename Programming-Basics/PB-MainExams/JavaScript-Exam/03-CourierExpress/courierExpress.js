function CourierExpress(packageWeightInKG, serviceType, distanceInKilometers) {
    // Create a variable to keep the price
    let price = 0;
    let basePricePerKm = 0;
    let expressPercent= 0;

    //Get the base price 
    if (packageWeightInKG < 1) {
        basePricePerKm = 0.03;
        expressPercent = 0.80;
    } else if (packageWeightInKG < 10) {
        basePricePerKm = 0.05;
        expressPercent = 0.40;
    } else if (packageWeightInKG < 40) {
        basePricePerKm = 0.10;
        expressPercent = 0.05;
    } else if (packageWeightInKG < 90) {
        basePricePerKm = 0.15;
        expressPercent = 0.02;
    } else {
        basePricePerKm = 0.20;
        expressPercent = 0.01;
    }

    // Get the base price for all services;
    price = distanceInKilometers * basePricePerKm;

    // Add it additionally when its an express delivery
    if (serviceType === "express") {
        let extraPerKm = packageWeightInKG * (expressPercent * basePricePerKm);
        let totalExtra = extraPerKm * distanceInKilometers;
        price += totalExtra;
    }

    // Print the result to the console
    console.log(`The delivery of your shipment with weight of ${packageWeightInKG.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}

CourierExpress(1.5, "standard", 100);
CourierExpress(87, "express", 130);
CourierExpress(20, "standard", 349);