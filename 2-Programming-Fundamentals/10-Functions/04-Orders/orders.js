function orders(product, quantity) {
    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;

    let totalPrice = 0;

    if (product === "coffee") {
        totalSum = coffee * quantity;
    }
    else if (product === "water") {
        totalSum = water * quantity;
    }
    else if (product === "coke") {
        totalSum = coke * quantity;
    }
    else if (product === "snacks") {
        totalSum = snacks * quantity;
    }

    console.log(totalSum.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);