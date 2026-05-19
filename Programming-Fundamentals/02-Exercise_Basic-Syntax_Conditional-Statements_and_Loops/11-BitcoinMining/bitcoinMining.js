function BitcoinMining(arr) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let bitcoinTracker = 0;
    let dayCounter = 0;
    let moneyTracker = 0;
    let firstPurchaseDay = 0;

    for (let gold of arr) {
        dayCounter++;

        if (dayCounter % 3 === 0) {
            gold *= 0.7;
        }

        moneyTracker += gold * goldPrice;

        while (moneyTracker >= bitcoinPrice) {
            if (bitcoinTracker === 0) {
                firstPurchaseDay = dayCounter;
            }
            moneyTracker -= bitcoinPrice;
            bitcoinTracker++;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinTracker}`);
    if (bitcoinTracker > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchaseDay}`);
    }
    console.log(`Left money: ${moneyTracker.toFixed(2)} lv.`);
}

BitcoinMining([50, 100]);
BitcoinMining([3124.15, 504.212, 2511.124]);
