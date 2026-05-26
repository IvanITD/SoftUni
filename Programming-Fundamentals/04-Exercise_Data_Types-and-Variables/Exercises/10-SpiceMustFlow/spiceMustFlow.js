function SpiceMustFlow(startingYield) {
    let dayCounter = 0;
    let spicesCollected = 0;

    while (startingYield >= 100) {
        dayCounter++; // Adding a day to the counter
        spicesCollected += startingYield; // Adding the yield of the current day to the total collected spices
        startingYield -= 10; // Each next day the yield decreases by 10
        spicesCollected -= 26; // Each next day the workers consume 26 spices
    }

    // Because the yield ended the workers consume 26 more spices.
    if (spicesCollected >= 26) {
        spicesCollected -= 26;
    }

    // Print the result to the console
    console.log(dayCounter);
    console.log(spicesCollected);
}

SpiceMustFlow(111);
SpiceMustFlow(450);