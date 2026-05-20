function SleepyTomCat(input) {
    // PLay time norm
    let playTimeNormPerYear = parseInt(30000);

    // Play time for work days
    let playTimeWorkDays = parseInt(63);

    // Play time for rest days
    let playTimeRestDays = parseInt(127);

    // Year days
    let yearDays = parseInt(365);

    // User Input
    let restDaysAmount = parseInt(input);

    // Working Days
    let workingDays = parseInt(yearDays - restDaysAmount);

    // Rest Days
    let restDays = parseInt(restDaysAmount * playTimeRestDays);

    // Real time for playing
    let realTimeForPlaying = parseInt((workingDays * playTimeWorkDays) + (restDaysAmount * playTimeRestDays));

    // Difference
    let difference = parseInt(Math.abs(playTimeNormPerYear - realTimeForPlaying));

    // Different in hours
    let differenceHours = parseInt(difference / 60);

    // Different in minutes
    let differenceMinutes = parseInt(difference % 60);

    // Check if Tom sleeps more or less than the norm
    if (realTimeForPlaying > playTimeNormPerYear) {
        console.log(`Tom will run away`);
        console.log(`${differenceHours} hours and ${differenceMinutes} minutes more for play`);
    }
    else if (realTimeForPlaying < playTimeNormPerYear) {
        console.log(`Tom sleeps well`);
        console.log(`${differenceHours} hours and ${differenceMinutes} minutes less for play`);
    }
}

SleepyTomCat(20);
SleepyTomCat(113);