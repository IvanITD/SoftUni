function BonusScore(startingPoints) {
    // Create a variable to store the bonus points
    let bonusPoints = 0.0;

    // Check the starting points and calculate the bonus points accordingly
    if (startingPoints <= 100) {
        bonusPoints = 5;
    }
    else if (startingPoints > 100 && startingPoints <= 1000) {
        bonusPoints = startingPoints * (20 / 100);
    }
    else if (startingPoints > 1000) {
        bonusPoints = startingPoints * (10 / 100);
    }
    
    // Check if the starting points are even or odd
    if (startingPoints % 2 === 0) {
        bonusPoints += 1;
    }
    else if (startingPoints % 10 === 5) {
        bonusPoints += 2;
    }

    // Print the result to the console
    console.log(bonusPoints);
    console.log(startingPoints + bonusPoints);
}

BonusScore(20);
BonusScore(175);
BonusScore(2703);
BonusScore(15875);