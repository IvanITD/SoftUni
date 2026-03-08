function SkiTrip(days, place, grade) {
    // Variables for later use
    let total;
    let nights;
    
    // Create the prices for later use
    let roomForOnePerson = 18.00;
    let apartment = 25.00;
    let presidentApartment = 35.00;

    // Check how many days Atanas is going to stay
    if (days < 10) {
        // Check the place
        switch (place) {
            case "room for one person":
                total = days * roomForOnePerson;
                break;
            case "apartment":
                total = days * apartment;
                
                // Get the discount which is 30% from the total price
                total -= (total * (30 / 100));
                break;
            case "president apartment":
                total = days * presidentApartment;

                // Get the discount which is 10% from the total price
                total -= (total * (10 / 100));
                break;
        }
    }
    else if (days >= 10 && days <= 15) {
        // Check the place
        switch (place) {
            case "room for one person":
                total = days * roomForOnePerson;
                break;
            case "apartment":
                total = days * apartment;

                // Get the discount which is 35% from the total price
                total -= (total * (35 / 100));
                break;
            case "president apartment":
                total = days * presidentApartment;

                // Get the discount which is 15% from the total price
                total -= (total * (15 / 100));
                break;
        }
    }
    else if (days > 15) {
        // Check the place
        switch (place) {
            case "room for one person":
                total = days * roomForOnePerson;
                break;
            case "apartment":
                total = days * apartment;

                // Get the discount which is 50% from the total price
                total -= (total * (50 / 100));
                break;
            case "president apartment":
                total = days * presidentApartment;

                // Get the discount which is 20% from the total price
                total -= (total * (20 / 100));
        }
    }

    // Check if the 
}