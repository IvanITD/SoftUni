function Cinema(projectionType, lines, columns) {
    // Set a variable called income for later use
    let income = 0.0;

    // Set the prices for the different projections
    const premierePrice = 12.00;
    const normalPrice = 7.50;
    const discountedPrice = 5.00;

    // Check what would be the projection
    if (projectionType === "Premiere") {
        income = lines * columns * premierePrice;
    }
    else if (projectionType === "Normal") {
        income = lines * columns * normalPrice;
    }
    else if (projectionType === "Discount") {
        income = lines * columns * discountedPrice;
    }

    // Print to the console
    console.log(`${income.toFixed(2)} leva`);
}

Cinema("Premiere", 10, 12);
Cinema("Normal", 21, 13);
Cinema("Discount", 12, 30);