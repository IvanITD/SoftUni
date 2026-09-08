function HotelRoom(month, nights) {
    // Variables for later use
    let studio;
    let apartment;
    
    // Check the month
    switch (month) {
        case "May":
        case "October":
            // Set up prices
            studio = 50;
            apartment = 65;

            // Sum the total price
            studio *= nights;
            apartment *= nights;

            // Check for the discounts
            if (nights > 14) {
                apartment -= apartment * (10 / 100);
                studio -= studio * (30 / 100);
            }
            else if (nights > 7) {
                studio -= studio * (5 / 100);
            }
            break;
        case "June":
        case "September":
            // Set up prices
            studio = 75.20;
            apartment = 68.70;

            // Sum the total price
            studio *= nights;
            apartment *= nights;

            // Check for the discounts
            if (nights > 14) {
                apartment -= apartment * (10 / 100);
                studio -= studio * (20 / 100);
            }

            break;
        case "July":
        case "August":
            // Set up prices
            studio = 76;
            apartment = 77;

            // Sum the total price
            studio *= nights;
            apartment *= nights;

            // Check for the discounts
            if (nights > 14) {
                apartment -= apartment * (10 / 100);
            }
            break;
    }

    // Print the result to the console
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}

HotelRoom("May", 15);
HotelRoom("June", 14);
HotelRoom("August", 20);