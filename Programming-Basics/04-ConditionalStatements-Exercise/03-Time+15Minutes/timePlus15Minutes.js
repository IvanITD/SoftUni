function TimePlus15Minutes(hours, minutes) {
    //Get the total minutes
    let totalMinutes = hours * 60 + minutes;

    //Add 15 minutes to the total minutes
    totalMinutes += 15;

    //Calculate the new hours and minutes
    let totalHours = Math.floor(totalMinutes / 60);
    let remainingMinutes = totalMinutes % 60;

    //If the total hours exceed 23, reset to 0
    if (totalHours >= 24) {
        totalHours = 0;
    }

    //If the remaining minutes are less than 10, add a leading zero
    if (remainingMinutes < 10) {
        console.log(`${totalHours}:0${remainingMinutes}`);
    } else {
        console.log(`${totalHours}:${remainingMinutes}`);
    }
}

TimePlus15Minutes(1, 46);
TimePlus15Minutes(0, 1);
TimePlus15Minutes(23, 59);
TimePlus15Minutes(11, 8);
TimePlus15Minutes(12, 49);