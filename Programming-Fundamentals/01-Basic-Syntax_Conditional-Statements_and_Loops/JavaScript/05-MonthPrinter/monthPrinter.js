function monthPrinter(number) {
    // Write a number that will represent a specific month, then check the number to print the number
    switch (number) {
        case 1:
            // Print January
            console.log('January');
            break;
        case 2:
            // Print February
            console.log('February');
            break;
        case 3:
            // Print March
            console.log('March');
            break;
        case 4:
            // Print April
            console.log('April');
            break;
        case 5:
            // Print May
            console.log('May');
            break;
        case 6:
            // Print June
            console.log('June');
            break;
        case 7:
            // Print July
            console.log('July');
            break;
        case 8:
            // Print August
            console.log('August');
            break;
        case 9:
            // Print September
            console.log('September');
            break;
        case 10:
            // Print October
            console.log('October');
            break;
        case 11:
            // Print November
            console.log('November');
            break;
        case 12:
            // Print December
            console.log('December');
            break;
        default: // If anything else
            // Print to the console 'Error!'
            console.log('Error!');
            break;
    }
}

monthPrinter(2);
monthPrinter(13);