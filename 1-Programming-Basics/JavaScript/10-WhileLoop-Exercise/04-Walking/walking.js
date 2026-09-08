function Walking(array) {
    let steps = 0;
    let index = 0;

    // While loop
    while (steps < 10000) {
        let input = array[index];
        index++;

        if (input == "Going home") {
            let stepsToHome = parseInt(array[index]);
            index++;
            steps += stepsToHome;
            break;
        }
        steps += parseInt(input);
    }

    if (steps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - 10000} steps over the goal!`);
    }
    else {
        console.log(`${10000 - steps} more steps to reach goal.`);
    }
}

Walking(["1000", "1500", "2000", "6500"]);
Walking(["1500", "300", "2500", "3000", "Going home", "200"]);
Walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
Walking(["125", "250", "4000", "30", "2678", "4682"]);