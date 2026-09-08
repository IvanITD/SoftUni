function FuelTank(fuelType, fuelAmount) {
    if (fuelType === "Diesel") {
        if (fuelAmount >= 25) {
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        }
        else if (fuelAmount < 25) {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
    }
    else if (fuelType === "Gasoline") {
        if (fuelAmount >= 25) {
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        }
        else if (fuelAmount < 25) {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
    }
    else if (fuelType === "Gas") {
        if (fuelAmount >= 25) {
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        }
        else if (fuelAmount < 25) {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
    }
    else {
        console.log("Invalid fuel!");
    }
}

FuelTank("Diesel", 10);
FuelTank("Gasoline", 40);
FuelTank("Gas", 25);
FuelTank("Kerosene", 200);