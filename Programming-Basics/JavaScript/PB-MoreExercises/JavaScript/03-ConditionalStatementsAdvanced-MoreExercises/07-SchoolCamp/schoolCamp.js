function SchoolCamp(season, groupType, studentsAmount, nights) {
    // Created variables for later use
    let pricePerNight = 0.0;
    let pricePerStudent = 0.0;
    let sportsType = "";
    let discount = 0.0;
    let totalAmount = 0.0;
    
    // Check if the group type is boys, girls, or mixed
    if (groupType === "boys") {
        // Check if the season is Winter, Spring or Summer
        if (season === "Winter") {
            // Calculate the price per night
            pricePerNight = nights * 9.60;

            // Calculate the price per night with each student
            pricePerStudent = studentsAmount * pricePerNight;

            // Add the type of sport
            sportsType = "Judo";
        }
        else if (season === "Spring") {
            // Calculate the price per night
            pricePerNight = nights * 7.20;

            // Calculate the price per night with each student
            pricePerStudent = studentsAmount * pricePerNight;

            // Add the type of sport
            sportsType = "Tennis";
        }
        else if (season === "Summer") {
            // Calculate the price per night
            pricePerNight = nights * 15.00;

            // Calculate the price per night with each student
            pricePerStudent = studentsAmount * pricePerNight;

            // Add the type of sport
            sportsType = "Football";
        }
    }
    else if (groupType === "girls") {
        // Check if the season is Winter, Spring or Summer
        if (season === "Winter") {
            // Calculate the price per night
            pricePerNight = nights * 9.60;

            // Calculate the price per night with each student
            pricePerStudent = studentsAmount * pricePerNight;

            // Add the type of sport
            sportsType = "Gymnastics";
        }
        else if (season === "Spring") {
            // Calculate the price per night
            pricePerNight = nights * 7.20;

            // Calculate the price per night with each student
            pricePerStudent = studentsAmount * pricePerNight;

            // Add the type of sport
            sportsType = "Athletics";
        }
        else if (season === "Summer") {
            // Calculate the price per night
            pricePerNight = nights * 15.00;

            // Calculate the price per night with each student
            pricePerStudent = studentsAmount * pricePerNight;

            // Add the type of sport
            sportsType = "Volleyball";
        }
    }
    else if (groupType === "mixed") {
        // Check if the season is Winter, Spring or Summer
        if (season === "Winter") {
            // Calculate the price per night
            pricePerNight = nights * 10.00;

            // Calculate the price per night with each student
            pricePerStudent = studentsAmount * pricePerNight;

            // Add the type of sport
            sportsType = "Ski";
        }
        else if (season === "Spring") {
            // Calculate the price per night
            pricePerNight = nights * 9.50;

            // Calculate the price per night with each student
            pricePerStudent = studentsAmount * pricePerNight;

            // Add the type of sport
            sportsType = "Cycling";
        }
        else if (season === "Summer") {
            // Calculate the price per night
            pricePerNight = nights * 20.00;

            // Calculate the price per night with each student
            pricePerStudent = studentsAmount * pricePerNight;

            // Add the type of sport
            sportsType = "Swimming";
        }
    }
    // The School gets a discount from the total price, depending on the amount of students
    if (studentsAmount >= 50) {
        // The school gets 50% discount
        discount = pricePerStudent * (50 / 100);

        // Substracting the discount from the prise per student to get the total
        totalAmount = pricePerStudent - discount;
    }
    else if (studentsAmount >= 20 && studentsAmount < 50) {
        // The school gets 50% discount
        discount = pricePerStudent * (15 / 100);

        // Substracting the discount from the prise per student to get the total
        totalAmount = pricePerStudent - discount;
    }
    else if (studentsAmount >= 10 && studentsAmount < 20) {
        // The school gets 50% discount
        discount = pricePerStudent * (5 / 100);

        // Substracting the discount from the prise per student to get the total
        totalAmount = pricePerStudent - discount;
    }
    else {
        totalAmount = pricePerStudent;
    }
    // Print the result to the console
    console.log(`${sportsType} ${totalAmount.toFixed(2)} lv.`);
}

SchoolCamp("Spring", "girls", 20, 7);
SchoolCamp("Winter", "mixed", 9, 15);
SchoolCamp("Summer", 'boys', 60, 7);
SchoolCamp("Spring", "mixed", 17, 14);