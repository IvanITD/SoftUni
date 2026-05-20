function Harvest(x, y, z, workersAmount) {
    // For one liter wine we need 2.5kg grapes
    let grapesForOneLiterWine = parseFloat(2.5);

    // Total grapes
    let totalGrapes = parseFloat(x * y);

    // Wine
    let wine = parseFloat(totalGrapes * (40 / 100) / grapesForOneLiterWine);

    // Wine for 1 worker
    let wineForOneWorker = parseFloat((wine - z) / workersAmount);

    // Check if we have enough wine
    if (wine < z) {
        // Print the result to the console
        console.log(`It will be a tough winter! More ${Math.floor(z - wine)} liters wine needed.`);
    }
    else if (wine >= z) {
        // Print the result to the console
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - z)} liters left -> ${Math.ceil(wineForOneWorker)} liters per person.`);
    }
}

Harvest(650, 2, 175, 3);
Harvest(1020, 1.5, 425, 4);