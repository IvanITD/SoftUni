function SpeedInfo(speed) {
    if (speed <= 10) {
        console.log("slow")
    }
    else if (speed > 10 && speed <= 50) {
        console.log("average")
    }
    else if (speed > 50 && speed <= 150) {
        console.log("fast");
    }
    else if (speed > 150 && speed <= 1000) {
        console.log("ultra fast");
    }
    else {
        console.log("extremely fast");
    }
}

SpeedInfo(8); // slow
SpeedInfo(49.5); // average
SpeedInfo(126); // fast
SpeedInfo(160); // ultra fast
SpeedInfo(3500); // extremely fast