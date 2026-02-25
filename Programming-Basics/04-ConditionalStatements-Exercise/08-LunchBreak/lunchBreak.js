function LunchBreak (tvSeries, episodeDuration, breakDuration) {
    // Calculate the time needed for lunch
    let breakTime = breakDuration * 1 / 8

    // Calculate the time needed for watching the episode
    let episodeTime = breakTime * 1 / 4

    // Calculate the remaining time after lunch and watching the episode
    let remainingTime = breakDuration - breakTime - episodeTime;

    // Check if the remaining time is enough to watch the episode
    if (remainingTime >= episodeDuration) {
        // Print result to the console
        console.log(`You have enough time to watch ${tvSeries} and left with ${remainingTime.toFixed(0)} minutes free time.`);
    }
    else {
        let neededTime = episodeDuration - remainingTime;
        
        // Print result to the console
        console.log(`You don't have enough time to watch ${tvSeries}, you need ${neededTime.toFixed(0)} more minutes.`);
    }
}

LunchBreak("Game of Thrones", 60, 96);
LunchBreak("Teen Wolf", 48, 60);