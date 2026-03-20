function Oscars(array) {
    // Create variables in order to use the inputs
    let actorName = array[0];
    let academyPoints = parseFloat(array[1]);
    let evaluatorsAmount = array[2];
    
    // Create a loop to go through the evaluators
    for (let i = 0; i < evaluatorsAmount; i++) {
        // Create the variables for the evaluators name and points
        let evaluatorsName = array[i * 2 + 3];
        let evaluatorsPoints = parseFloat(array[i * 2 + 4]);

        // Calculate the academyPoints
        academyPoints += (evaluatorsName.length * evaluatorsPoints) / 2;

        // Check if the academy points have exceeded 1250.5 and break if so.
        if (academyPoints >= 1250.50) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints}!`);
            break;
        }
    }

    // Check if the academy points are not enough and print it ot the console
    if (academyPoints < 1250.50) {
        // Calculate the needed points
        let neededPoints = 1250.50 - academyPoints;
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)}`);
    }
}

Oscars(["Zahari Baharov","205", 4, "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
Oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);