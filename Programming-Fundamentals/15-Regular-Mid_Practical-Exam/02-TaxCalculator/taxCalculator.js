function taxCalculator(arr) {
    let vehicles = arr[0].split(">>");
    let totalTaxCollected = 0;

    for (let vehicle of vehicles) {
        let tokens = vehicle.split(" ");
        let carType = tokens[0];
        let years = Number(tokens[1]);
        let kilometers = Number(tokens[2]);

        if (carType === "family") {
            let taxDecline = years * 5;
            let kmTax = Math.floor(kilometers / 3000) * 12;
            let totalTax = 50 - taxDecline + kmTax;
            totalTaxCollected += totalTax;
            console.log(`A family car will pay ${totalTax.toFixed(2)} euros in taxes.`);
        } else if (carType === "heavyDuty") {
            let taxDecline = years * 8;
            let kmTax = Math.floor(kilometers / 9000) * 14;
            let totalTax = 80 - taxDecline + kmTax;
            totalTaxCollected += totalTax;
            console.log(`A heavyDuty car will pay ${totalTax.toFixed(2)} euros in taxes.`);
        } else if (carType === "sports") {
            let taxDecline = years * 9;
            let kmTax = Math.floor(kilometers / 2000) * 18;
            let totalTax = 100 - taxDecline + kmTax;
            totalTaxCollected += totalTax;
            console.log(`A sports car will pay ${totalTax.toFixed(2)} euros in taxes.`);
        } else {
            console.log("Invalid car type.");
        }
    }
    console.log(`The National Revenue Agency will collect ${totalTaxCollected.toFixed(2)} euros in taxes.`);
}

taxCalculator(([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]));
console.log();
taxCalculator(([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]));