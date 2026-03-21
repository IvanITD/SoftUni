function SummerOutfit(degrees, dayTime) {
    // Create variables for later use
    let outfit = " ";
    let shoes = " ";
    
    // Check the degrees
    if (degrees >= 10 && degrees <= 18) {
        // Check what time of the day is it
        switch (dayTime) {
            case "Morning":
                outfit = "Sweatshirt"
                shoes = "Sneakers"
                break;

            case "Afternoon":
                outfit = "Shirt"
                shoes = "Moccasins"
                break;

            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                break;
        }
    }
    else if (degrees > 18 && degrees <= 24) {
        // Check what time of the day is it
        switch (dayTime) {
            case "Morning":
                outfit = "Shirt"
                shoes = "Moccasins"
                break;

            case "Afternoon":
                outfit = "T-Shirt"
                shoes = "Sandals"
                break;

            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                break;
        }
    }
    else if (degrees >= 25) {
        // Check what time of the day is it
        switch (dayTime) {
            case "Morning":
                outfit = "T-Shirt"
                shoes = "Sandals"
                break;
                
            case "Afternoon":
                outfit = "Swim Suit"
                shoes = "Barefoot"
                break;

            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                break;
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

SummerOutfit(16, "Morning");
SummerOutfit(22, "Afternoon");
SummerOutfit(28, "Evening");