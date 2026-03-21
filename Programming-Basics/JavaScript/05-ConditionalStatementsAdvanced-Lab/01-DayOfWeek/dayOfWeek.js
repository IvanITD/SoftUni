function DayOfWeek(number) {
    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
            default:
                console.log("Error");
                break;

    }
}

DayOfWeek(1);
DayOfWeek(2);
DayOfWeek(3);
DayOfWeek(4);
DayOfWeek(5);
DayOfWeek(6);
DayOfWeek(7);
DayOfWeek(-1);