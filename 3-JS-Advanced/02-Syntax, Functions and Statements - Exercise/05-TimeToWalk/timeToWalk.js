function timeToWalk(steps, footprintMeters, speedKmH) {
    let distanceMeters = steps * footprintMeters;
    let speedMetersPerSecond = speedKmH * 1000 / 3600;
    let walkSeconds = distanceMeters / speedMetersPerSecond;
    let restMinutes = Math.floor(distanceMeters / 500);
    let restSeconds = restMinutes * 60;
    let totalSeconds = Math.round(walkSeconds + restSeconds);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);