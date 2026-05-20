function TransportPrice(numberOfKilometers, timeOfDay) {
    // variable for the tariff
    let tariff = parseFloat(0.0);
    let price = parseFloat(0.0);

    if (numberOfKilometers >= 100) {
        tariff = 0.06;
        price = numberOfKilometers * tariff;
    }
    else if (numberOfKilometers >= 20) {
        tariff = 0.09;
        price = numberOfKilometers * tariff;
    }
    else {
        if (timeOfDay === "day") {
            let dayTariff = parseFloat(0.79);
            tariff = dayTariff;
            price = numberOfKilometers * tariff + 0.70;
        }
        else if (timeOfDay === "night") {
            let nightTariff = parseFloat(0.90);
            tariff = nightTariff;
            price = numberOfKilometers * tariff + 0.70;
        }
    }
    // Print the result to the console
    console.log(price.toFixed(2));
}

TransportPrice(5, "day");
TransportPrice(7, "night");
TransportPrice(25, "day");
TransportPrice(180, "night");