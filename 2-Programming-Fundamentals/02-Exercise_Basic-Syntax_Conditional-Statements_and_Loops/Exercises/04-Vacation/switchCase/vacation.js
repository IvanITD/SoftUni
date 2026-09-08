function vacation(peopleCount, groupType, weekDay) {
    let price = 0;
    let totalPrice = 0;

    switch (weekDay) {
        case "Friday":
            switch (groupType) {
                case "Students":
                    price = peopleCount * 8.45;
                    break;
                case "Business":
                    price = peopleCount * 10.90;
                    break;
                case "Regular":
                    price = peopleCount * 15;
                    break;
            }
            break;
        case "Saturday":
            switch (groupType) {
                case "Students":
                    price = peopleCount * 9.80;
                    break;
                case "Business":
                    price = peopleCount * 15.60;
                    break;
                case "Regular":
                    price = peopleCount * 20;
                    break;
            }
            break;
        case "Sunday":
            switch (groupType) {
                case "Students":
                    price = peopleCount * 10.46;
                    break;
                case "Business":
                    price = peopleCount * 16;
                    break;
                case "Regular":
                    price = peopleCount * 22.50;
                    break;
            }
            break;
    }

    if (groupType === "Students" && peopleCount >= 30) {
        totalPrice = price * (85 / 100);
    }
    else if (groupType === "Business" && peopleCount >= 100) {
        totalPrice = price - (10 * price / peopleCount);
    }
    else if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice = price * (95 / 100);
    }
    else {
        totalPrice = price;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");