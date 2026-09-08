function Vacation(array) {
    // User Input
    let neededMoney = parseFloat(array[0]);
    let availableMoney = parseFloat(array[1]);

    // Create variables for later use
    let daysCount = 0;
    let spendCount = 0;
    let index = 2;

    // While loop
    while (availableMoney < neededMoney && spendCount < 5) {
        if (index >= array.length) {
            break;
        }
        
        let action = array[index];
        index++;
        let amount = parseFloat(array[index]);
        index++;

        daysCount++;

        if (action == "spend") {
            availableMoney -= amount;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            spendCount++;
        }
        else if (action == "save") {
            availableMoney += amount;
            spendCount = 0;
        }
    }

    if (spendCount == 5) {
        // Print to the console
        console.log("You can't save the money.");
        console.log(daysCount);
    }
    else {
        console.log(`You saved the money for ${daysCount} days.`);
    }
}

Vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
Vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
Vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);