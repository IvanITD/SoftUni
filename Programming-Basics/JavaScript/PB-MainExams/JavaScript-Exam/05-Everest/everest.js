function Everest(array) {
    // Creating variables holding the starting height, Everest height and the day count
    let startingHeight = 5364;
    const EverestHeight = 8848;
    let days = 1; // Start from day 1
    let index = 0;

    // Creating a while loop to loop through the days
    while (index < array.length) {
        // Take the user input from the array
        let rest = array[index];

        // CHecking to see if he ended the climbing
        if (rest === "END") {
            // Printing to the console that he failed
            console.log("Failed!");
            console.log(startingHeight);
            break;
        }

        // Take the user input from the array
        let climbedMeters = Number(array[index + 1]);
        index += 2;

        // Checking to see if he decided to rest
        if (rest === "Yes") {
            days++; // plus 1 to the day count
        }

        // CHecking to see if the days counted more than 5
        if (days > 5) {
            // Printing to the console that he failed, because it took him more than 5 days
            console.log("Failed!");
            console.log(startingHeight);
            break;
        }

        // Adding the climbed meters to the starting height
        startingHeight += climbedMeters;

        // Checking to see if the starting height is equal or more than the Everest height
        if (startingHeight >= EverestHeight) {
            // Printing to the console that he achieved climbing Everest
            console.log(`Goal reached for ${days} days!`);
            break;
        }
    }
}

Everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
Everest(["Yes","1000", "Yes", "945", "No", "1200", "END"]);
Everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]); 
Everest(["Yes", "700", "END"]);