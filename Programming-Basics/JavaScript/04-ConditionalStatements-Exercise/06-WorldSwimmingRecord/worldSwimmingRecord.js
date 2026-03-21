function WorldSwimmingRecord(recordInSeconds, distanceInMeters, timeInSecondsForOneMeter) {
    // Calculate the time needed to swim the distance
    let timeInSeconds = distanceInMeters * timeInSecondsForOneMeter;

    // Every 15 meters, the swimmer slows down by 12.5 seconds
    let slowDownTime = Math.floor(distanceInMeters / 15) * 12.5;
    
    // Total time is the swimming time plus the slow down time
    let totalTime = timeInSeconds + slowDownTime;

    // Compare the total time with the world record
    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
    else {
        let timeNeeded = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    }
}

WorldSwimmingRecord(10464, 1500, 20);
WorldSwimmingRecord(55555.67, 3017, 5.03);