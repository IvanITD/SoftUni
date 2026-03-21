function Traveling(array) {
    // Take the user input from the array
    let destination = array[0];

    // Create an index that counts the loops
    let index = 1;

    // Creating a While loop to check the budget
    while (destination != "End") {
        // Reading the minimal budget for the current destination
        let minimalBudget = parseInt(array[index]);
        index++;

        // Creating a variable to store the saved money
        let savedMoney = 0;

        // Creating a While loop to check the saved money
        while (savedMoney < minimalBudget) {
            // Adding the current money to the saved money
            savedMoney += parseInt(array[index]);
            index++;
        }
        // Printing the destination to the console
        console.log(`Going to ${destination}!`);

        // Reading the next destination
        destination = array[index];
        index++;
    }
}

Traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
Traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);