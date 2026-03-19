function CleverLily(age, washingMachinePrice, toyPrice) {
    // Create variables for later use
    let toysAmount = 0;
    let money = 0;
    let takenMoneyFromBrother = 0;
    
    // Create a loop that will circle through each birthday
    for (let i = 1; i <= age; i++) {
        // Check if the birthday age is Even or Odd
        if (i % 2 === 0) {
            money += (i / 2) * 10;

            // Each year her brother is taking 1lev from her money
            takenMoneyFromBrother++;
        }
        else {
            toysAmount++;
        }
    }

    // Calculate the totalPrice for the toys
    let totalToyPrice = toysAmount * toyPrice;

    // Calculate the total amount of money Lily was able to collect, minus the amount the brother took over the years
    let totalMoney = money + totalToyPrice - takenMoneyFromBrother;

    // Check whether Lily was able to buy the washingMachine
    if (totalMoney >= washingMachinePrice) {
        // Calculate the remaining amount in order to print it to the console
        let remainingMoney = totalMoney - washingMachinePrice;
        
        // Print the result to the console
        console.log(`Yes! ${remainingMoney.toFixed(2)}`);
    }
    else if (totalMoney < washingMachinePrice) {
        // Calculate the needed amount in order to print it to the console
        let neededMoney = washingMachinePrice - totalMoney;
        
        // Print the result to the console
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }
}

CleverLily(10, 170.00, 6);
CleverLily(21, 1570.00, 3);