function Shopping(peterBudget, gpuCount, cpuCount, ramCount) {
    // Price for gpu
    const gpuPrice = 250;
    let gpuTotalPrice = gpuPrice * gpuCount;

    // Price for cpu
    const cpuPrice = gpuTotalPrice * (35 / 100);
    let cpuTotalPrice = cpuPrice * cpuCount;

    // Price for ram
    const ramPrice = gpuTotalPrice * (10 / 100);
    let ramTotalPrice = ramPrice * ramCount;

    // Calculate the total price
    let totalPrice = gpuTotalPrice + cpuTotalPrice + ramTotalPrice;
    
    // Calculate the discount if Peter buys more gpu than cpu
    if (gpuCount > cpuCount) {
        const discount = totalPrice * (15 / 100);
        totalPrice -= discount;
    }

    // Check if Peter has enough budget
    if (peterBudget >= totalPrice) {
        const moneyLeft = peterBudget - totalPrice;
        
        // Print the result with two decimal
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    }
    else {
        const moneyNeeded = totalPrice - peterBudget;

        // Print the result with two decimal
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}

Shopping(900, 2, 1, 3);
Shopping(920.45, 3, 1, 1);