function fruit(typeOfFruit, weightInGrams, pricePerKilogram) {
    let weightInKilograms = weightInGrams / 1000;
    let price = weightInKilograms * pricePerKilogram;

    console.log(`I need $${price.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${typeOfFruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);