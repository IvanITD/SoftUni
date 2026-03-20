function TennisRanklist(array) {
    // First we are reading some inputs from the given task
    let tournaments = array[0];
    let startingPoints = parseInt(array[1]);

    // Create a variable for later use
    let wins = 0;
    let collectedPoints = 0;

    // Create a for loop that will loop through the tournaments
    for (let i = 0; i < tournaments; i++) {
        let stage = array[i + 2];

        // Check what stage is it
        if (stage === "W") {
            // Because its a win add 2000 to the points
            collectedPoints += 2000;

            // Counting the wins for the end print
            wins++;
        }
        else if (stage === "F") {
            // Because its a final add 1200 to the points
            collectedPoints += 1200;
        }
        else if (stage === "SF") {
            // Because its a semi-final add 720 to the points
            collectedPoints += 720;
        }
    }

    // Calculate the total points
    let totalPoints = startingPoints + collectedPoints;

    //Get the average won points for a tournament
    let averagePoints = collectedPoints / tournaments;

    // Get the percentage for won tournaments
    let wonTournaments = (wins / tournaments) * 100;

    // Print the result to the console
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${wonTournaments.toFixed(2)}%`);
}

TennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
TennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
TennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);