function Pets(days, foodInKg, foodForDogKg, foodForCatKg, foodForTurtleGm) {
    // Calculating the needed dog food
    let neededFoodForDogKg = parseFloat(days * foodForDogKg);

    // Calculating the needed cat food
    let neededFoodForCatKg = parseFloat(days * foodForCatKg);

    // Calculating the needed turtle food
    let neededFoodForTurtleKg = parseFloat(days * foodForTurtleGm / 1000);

    // Calculating the total needed food
    let totalFood = parseFloat(neededFoodForDogKg + neededFoodForCatKg + neededFoodForTurtleKg);

    // Checking if the food is enough
    if (totalFood <= foodInKg) {
        // Calculating the remaining food
        let remainingFood = parseFloat(Math.floor(foodInKg - totalFood));

        // Printing the result to the console
        console.log(`${remainingFood} kilos of food left.`);
    }
    else {
        // Calculating the needed food
        let missingFood = parseFloat(Math.ceil(totalFood - foodInKg));

        // Printing the result to the console
        console.log(`${missingFood} more kilos of food are needed.`);
    }
}

Pets(2,10,1,1,1200);
Pets(5,10,2.1,0.8,321);