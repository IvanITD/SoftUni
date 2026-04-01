function VegetableMarket(vegetablesKGPrice, fruitsKGPrice, vegetablesTotalKG, fruitsTotalKG) {
    // Get the total for the fruits and vegetables
    let vegetablesTotalPrice = vegetablesKGPrice * vegetablesTotalKG;
    let fruitsTotalPrice = fruitsKGPrice * fruitsTotalKG;

    // Get the total from both the fruits and the vegetables
    let totalPrice = vegetablesTotalPrice + fruitsTotalPrice;

    // Now we convert the total price to euros
    let totalPriceInEuros = totalPrice / 1.94;

    // Print the result to the console
    console.log(totalPriceInEuros.toFixed(2));
}

VegetableMarket(0.194, 19.4, 10, 10);
VegetableMarket(1.5, 2.5, 10, 10);