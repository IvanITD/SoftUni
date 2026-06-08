function theatrePromotions(dayType, age) {
    // Create variable for later use
    
    // Check the age in order to determine the price of the ticket
    if (age >= 0 && age <= 18) {
        // Check the type of day
        switch (dayType) {
            case 'Weekday':
                console.log(`12$`);
                break;
            case 'Weekend':
                console.log(`15$`);
                break;
            case 'Holiday':
                console.log(`5$`);
                break;
        }
    }
    else if (age > 18 && age <= 64) {
        switch (dayType) {
            case 'Weekday':
                console.log(`18$`);
                break;
            case 'Weekend':
                console.log(`20$`);
                break;
            case 'Holiday':
                console.log(`12$`);
                break;
        }
    }
    else if (age > 64 && age <= 122) {
        switch (dayType) {
            case 'Weekday':
                console.log(`12$`);
                break;
            case 'Weekend':
                console.log(`15$`);
                break;
            case 'Holiday':
                console.log(`10$`);
                break;
        }
    }
    else { // If the age does not fit the category
        // Print to the console 'Error!'
        console.log('Error!');
    }
}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);