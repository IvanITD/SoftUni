function WorkingHours(dayTime, weekDay) {
// Check if its a working day
    switch (weekDay) {
        case "Monday":
            // Check if its a working hour
            if (dayTime >= 10 && dayTime <= 18) {
                console.log("open");
            }
            else {
                console.log("closed");
            }
            break;
        case "Tuesday":
            // Check if its a working hour
            if (dayTime >= 10 && dayTime <= 18) {
                console.log("open");
            }
            else {
                console.log("closed");
            }
            break;
        case "Wednesday":
            // Check if its a working hour
            if (dayTime >= 10 && dayTime <= 18) {
                console.log("open");
            }
            else {
                console.log("closed");
            }
            break;
        case "Thursday":
            // Check if its a working hour
            if (dayTime >= 10 && dayTime <= 18) {
                console.log("open");
            }
            else {
                console.log("closed");
            }
            break;
        case "Friday":
            // Check if its a working hour
            if (dayTime >= 10 && dayTime <= 18) {
                console.log("open");
            }
            else {
                console.log("closed");
            }
            break;
        case "Saturday":
            // Check if its a working hour
            if (dayTime >= 10 && dayTime <= 18) {
                console.log("open");
            }
            else {
                console.log("closed");
            }
            break;
            // If its sunday its closed
            case "Sunday":
            console.log("closed");
            break;
    }
}

WorkingHours(11, "Monday");
WorkingHours(19, "Friday");
WorkingHours(11, "Sunday");