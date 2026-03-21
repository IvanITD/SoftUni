function FruitShop(fruit, day, quantity) {
    // Create a variable total for later use
    let total = 0.0;

    // Create variables for the fruit prices
    let bananaPrice = 0.0;
    let applePrice = 0.0;
    let orangePrice = 0.0;
    let grapefruitPrice = 0.0;
    let kiwiPrice = 0.0;
    let pineapplePrice = 0.0;
    let grapesPrice = 0.0;
    
    // Check what fruit is it
    switch (fruit) {
        case "banana":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    bananaPrice = 2.50;
                    total = bananaPrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    bananaPrice = 2.70;
                    total = bananaPrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "apple":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    applePrice = 1.20;
                    total = applePrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    applePrice = 1.25;
                    total = applePrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "orange":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    orangePrice = 0.85;
                    total = orangePrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    orangePrice = 0.90;
                    total = orangePrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "grapefruit":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    grapefruitPrice = 1.45;
                    total = grapefruitPrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    grapefruitPrice = 1.60;
                    total = grapefruitPrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "kiwi":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    kiwiPrice = 2.70;
                    total = kiwiPrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    kiwiPrice = 3.00;
                    total = kiwiPrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "pineapple":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    pineapplePrice = 5.50;
                    total = pineapplePrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    pineapplePrice = 5.60;
                    total = pineapplePrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "grapes":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    grapesPrice = 3.85;
                    total = grapesPrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    grapesPrice = 4.20;
                    total = grapesPrice * quantity;
                    console.log(total.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        default:
            console.log("error");
            break;
    }
}

FruitShop("apple", "Tuesday", 2);
FruitShop("orange", "Sunday", 3);
FruitShop("kiwi", "Monday", 2.5);
FruitShop("grapes", "Saturday", 0.5);
FruitShop("tomato", "Monday", 0.5);