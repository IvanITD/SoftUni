function CatDiet(percentFat, percentProtein, percentCarbs, totalCalories, percentOfWater) {
    let gramFatToCalories = 9;
    let gramProteinToCalories = 4;
    let gramCarbsToCalories = 4;

    let totalFatGrams = (totalCalories * (percentFat / 100)) / gramFatToCalories;
    let totalProteinGram = (totalCalories * (percentProtein / 100)) / gramProteinToCalories;
    let totalCarbsGrams = (totalCalories * (percentCarbs / 100)) / gramCarbsToCalories;
    
    let foodWeight = totalFatGrams + totalProteinGram + totalCarbsGrams;

    let caloriesPerOneGram = totalCalories / foodWeight;

    let actualCalories = caloriesPerOneGram * (1 - percentOfWater / 100);

    console.log(actualCalories.toFixed(4));
}

CatDiet(60, 25, 15, 2500, 60);
CatDiet(40, 40, 20, 3000, 40);
CatDiet(20, 60, 20, 1800, 50);