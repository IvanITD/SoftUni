function SumSeconds(firstTime, secondTime, thirdTime) {
    let totalTime = firstTime + secondTime + thirdTime;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }
}

SumSeconds(35, 45, 44);
SumSeconds(22, 7, 34);
SumSeconds(50, 50, 49);
SumSeconds(14, 12, 10);