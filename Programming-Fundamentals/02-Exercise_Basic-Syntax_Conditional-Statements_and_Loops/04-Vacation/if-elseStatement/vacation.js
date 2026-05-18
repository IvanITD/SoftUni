function Vacation(peopleCount, groupType, weekDay) {
    let price = 0;
    let totalPrice = 0;

    if (weekDay === "Friday") {
        if (groupType === "Students") {
            price = peopleCount * 8.45;
        }
        else if (groupType === "Business") {
            price = peopleCount * 10.90;
        }
        else if (groupType === "Regular") {
            price = peopleCount * 15;
        }
    }
    else if (weekDay === "Saturday") {
        if (groupType === "Students") {
            price = peopleCount * 9.80;
        }
        else if (groupType === "Business") {
            price = peopleCount * 15.60;
        }
        else if (groupType === "Regular") {
            price = peopleCount * 20;
        }
    }
    else if (weekDay === "Sunday") {
        if (groupType === "Students") {
            price = peopleCount * 10.46;
        }
        else if (groupType === "Business") {
            price = peopleCount * 16;
        }
        else if (groupType === "Regular") {
            price = peopleCount * 22.50;
        }
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

Vacation(30, "Students", "Sunday");
Vacation(40, "Regular", "Saturday");