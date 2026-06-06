function DayOfWeek(number) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (number >= 1 && number <= 7) {
        console.log(days[number - 1])
    }
    else {
        console.log(`Invalid day!`);
    }
}

DayOfWeek(3);
DayOfWeek(6);
DayOfWeek(11);