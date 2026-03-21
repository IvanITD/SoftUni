function SmallShop(product, city, quantity) {
    // Create the total variable for later use
    let total = 0.0;

    // Check the city
    switch (city) {
        case "Sofia":
            // Check the product and calculate the total price
            switch (product) {
                case "coffee":
                    total = quantity * 0.50;
                    break;
                case "water":
                    total = quantity * 0.80;
                    break;
                case "beer":
                    total = quantity * 1.20;
                    break;
                case "sweets":
                    total = quantity * 1.45;
                    break;
                case "peanuts":
                    total = quantity * 1.60;
                    break;
            }
            break;
        case "Plovdiv":
            //Check the product and calculate the total price
            switch (product) {
                case "coffee":
                    total = quantity * 0.40;
                    break;
                case "water":
                    total = quantity * 0.70;
                    break;
                case "beer":
                    total = quantity * 1.15;
                    break;
                case "sweets":
                        total = quantity * 1.30;
                    break;
                case "peanuts":
                    total = quantity * 1.50;
                    break;
            }
            break;
        case "Varna":
            // Check the product and calculate the total price
            switch (product) {
                case "coffee":
                        total = quantity * 0.45;
                    break;
                case "water":
                    total = quantity * 0.70;
                    break;
                case "beer":
                    total = quantity * 1.10;
                    break;
                case "sweets":
                    total = quantity * 1.35;
                    break;
                case "peanuts":
                    total = quantity * 1.55;
                    break;
            }
            break;
    }

    console.log(total);
}

SmallShop("coffee", "Varna", 2);
SmallShop("peanuts", "Plovdiv", 1);
SmallShop("beer", "Sofia", 2);
SmallShop("water", "Plovdiv", 2);
SmallShop("sweets", "Sofia", 2.23);