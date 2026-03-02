function TradeCommissions (city, sales) {
    // Create a variable named total for later use
    let total = 0.0;

    // Check the city
    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                total = sales * (5 / 100);
                console.log(total.toFixed(2));
            }
            else if (sales > 500 && sales <= 1000) {
                total = sales * (7 / 100);
                console.log(total.toFixed(2));
            }
            else if (sales > 1000 && sales <= 10000) {
                total = sales * (8 / 100);
                console.log(total.toFixed(2));
            }
            else if (sales > 10000) {
                total = sales * (12 / 100);
                console.log(total.toFixed(2));
            }
            else {
                console.log("error");
            }
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                total = sales * (4.5 / 100);
                console.log(total.toFixed(2));
            }
            else if (sales > 500 && sales <= 1000) {
                total = sales * (7.5 / 100);
                console.log(total.toFixed(2));
            }
            else if (sales > 1000 && sales <= 10000) {
                total = sales * (10 / 100);
                console.log(total.toFixed(2));
            }
            else if (sales > 10000) {
                total = sales * (13 / 100);
                console.log(total.toFixed(2));
            }
            else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                total = sales * (5.5 / 100);
                console.log(total.toFixed(2));
            }
            else if (sales > 500 && sales <= 1000) {
                total = sales * (8 / 100);
                console.log(total.toFixed(2));
            }
            else if (sales > 1000 && sales <= 10000) {
                total = sales * (12 / 100);
                console.log(total.toFixed(2));
            }
            else if (sales > 10000) {
                total = sales * (14.5 / 100);
                console.log(total.toFixed(2));
            }
            else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }
}

TradeCommissions("Sofia", 1500);
TradeCommissions("Plovdiv", 499.99);
TradeCommissions("Varna", 3874.50);
TradeCommissions("Kaspichan", -50);