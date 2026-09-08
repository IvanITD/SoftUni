function FuelTankPartTwo(fuelType, fuelQuantity, clubCardCheck) {
    // Fuel prices
    let gasolinePrice = parseFloat(2.22);
    let dieselPrice = parseFloat(2.33);
    let gasPrice = parseFloat(0.93);

    let clubCard = parseFloat(0.0);
    let clubCardDiscount = parseFloat(0.0);
    let totalPrice = parseFloat(0.0);

    // Calculate the price for each fuel type after litters
    let gasolineTotal = fuelQuantity * gasolinePrice;
    let dieselTotal = fuelQuantity * dieselPrice;
    let gasTotal = fuelQuantity * gasPrice;

    if (fuelType === "Gas") {
        // Check whether the Fuel is Gas, Gasoline or Diesel
        if (clubCardCheck === "Yes") {
            clubCard = 0.08;

            // 0.08 lv for a liter of gas
            clubCardDiscount = fuelQuantity * clubCard;

            // Now to remove the club card cents from the total price
            gasTotal -= clubCardDiscount;

            // Check whether the liters are more than 20 and 25
            if (fuelQuantity >= 20 && fuelQuantity <= 25) {
                // 8% discount on the total price
                totalPrice = gasTotal - (gasTotal * 0.08);
            }
            else if (fuelQuantity > 25) {
                // 10% discount on the total price
                totalPrice = gasTotal - (gasTotal * 0.10);
            }
            else {
                totalPrice = gasTotal;
            }
        }
        else if (clubCardCheck === "No") {
            // Check whether the liters are more than 20 and 25
            if (fuelQuantity >= 20 && fuelQuantity <= 25) {
                // 8% discount on the total price
                totalPrice = gasTotal - (gasTotal * 0.08);
            }
            else if (fuelQuantity > 25) {
                // 10% discount on the total price
                totalPrice = gasTotal - (gasTotal * 0.10);
            }
            else {
                totalPrice = gasTotal;
            }
        }
    }
    else if (fuelType === "Gasoline") {
        // Check whether the use has a club card or not
        if (clubCardCheck === "Yes") {
            clubCard = 0.18;

            // 0.18 lv for a liter of gasoline
            clubCardDiscount = fuelQuantity * clubCard;

            // Now to remove the club card cents from the total price
            gasolineTotal -= clubCardDiscount;

            // Check whether the liters are more than 20 and 25
            if (fuelQuantity >= 20 && fuelQuantity <= 25) {
                // 8% discount on the total price
                totalPrice = gasolineTotal - (gasolineTotal * 0.08);
            }
            else if (fuelQuantity > 25) {
                // 10% discount on the total price
                totalPrice = gasolineTotal - (gasolineTotal * 0.10);
            }
            else {
                totalPrice = gasolineTotal;
            }
        }
        else if (clubCardCheck === "No") {
            // Check whether the liters are more than 20 and 25
            if (fuelQuantity > 20 && fuelQuantity <= 25) {
                // 8% discount on the total price
                totalPrice = gasolineTotal - (gasolineTotal * 0.08);
            }
            else if (fuelQuantity > 25) {
                // 10% discount on the total price
                totalPrice = gasolineTotal - (gasolineTotal * 0.10);
            }
            else {
                totalPrice = gasolineTotal;
            }
        }
    }
    else if (fuelType === "Diesel") {
        // Check whether the user has a club card or not
        if (clubCardCheck === "Yes") {
            clubCard = 0.12;

            // 0.12 lv for a liter of diesel
            clubCardDiscount = fuelQuantity * clubCard;

            // Now to remote the club card cents from the total price
            dieselTotal -= clubCardDiscount;

            // Check whether the liters are more than 20 and 25
            if (fuelQuantity >= 20 && fuelQuantity <= 25) {
                // 8% discount on the total price
                totalPrice = dieselTotal - (dieselTotal * 0.08);
            }
            else if (fuelQuantity > 25) {
                // 10% discount on the total price
                totalPrice = dieselTotal - (dieselTotal * 0.10);
            }
            else {
                totalPrice = dieselTotal;
            }
        }
        else if (clubCardCheck === "No") {
            // Check whether the liters are more than 20 and 25
            if (fuelQuantity >= 20 && fuelQuantity <= 25) {
                // 8% discount on the total price
                totalPrice = dieselTotal - (dieselTotal * 0.08);
            }
            else if (fuelQuantity > 25) {
                // 10% discount on the total price
                totalPrice = dieselTotal - (dieselTotal * 0.10);
            }
            else {
                totalPrice = dieselTotal;
            }
        }
    }
    // Print the result to the console
    console.log(`${totalPrice.toFixed(2)} lv.`);
}


FuelTankPartTwo("Gas", 30, "Yes");
FuelTankPartTwo("Gasoline", 25, "No");
FuelTankPartTwo("Diesel", 19, "No");