function LunchBreak(seriesName, episodeDuration, breakDuration) {
    let timeForLunch = breakDuration / 8;
    let timeForRelax = breakDuration / 4;
    let timeLeft = breakDuration - timeForLunch - timeForRelax;

    // Check if the time is enough for watching the episode
    if (timeLeft >= episodeDuration) {
        let timeLeftAfterWatching = Math.ceil(timeLeft - episodeDuration);
        
        // Print to the console
        console.log(`You have enough time to watch ${seriesName} and left with ${timeLeftAfterWatching} minutes free time.`);
    }
    else {
        let timeNeeded = Math.ceil(episodeDuration - timeLeft);
        
        // Print to the console
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeNeeded} more minutes.`);
    }
}

LunchBreak("Game of Thrones", 60, 96);
LunchBreak("Teen Wolf", 48, 60);