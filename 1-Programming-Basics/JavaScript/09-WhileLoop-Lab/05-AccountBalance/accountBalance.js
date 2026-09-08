function AccountBalance(array) {
    // Create a variable to store the total balance
    let totalBalance = 0;

    // Create an index for the loop
    let index = 0

    // Check if there is money
    while (true) {
        let input = array[index];
        index++;

        if(input === "NoMoreMoney") {
            break;
        }

        let amount = parseFloat(input);

        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }

        totalBalance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
    }
    console.log(`Total: ${totalBalance.toFixed(2)}`);
}

AccountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
AccountBalance(["120", "45.55", "-150"]);