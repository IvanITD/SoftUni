function experienceGaining(arr) {
    let neededExperience = arr[0];
    let battleCount = arr[1];
    let gatheredExperience = 0;

    
    for (let i = 2; i < arr.length; i++) {
        let currentBattle = i - 1;
        let currentExperience = arr[i];

        if (currentBattle % 15 === 0) {
            currentExperience *= 1.15 * 0.90 * 1.05;
        } else if (currentBattle % 5 === 0) {
            currentExperience = currentExperience * 0.90;
        } else if (currentBattle % 3 === 0) {
            currentExperience = currentExperience * 1.15;
        }

        gatheredExperience += currentExperience;

        if (gatheredExperience >= neededExperience) {
            console.log(`Player successfully collected his needed experience for ${currentBattle} battles.`);
            return;
        }
    }
    let needed = neededExperience - gatheredExperience;
    console.log(`Player was not able to collect the needed experience, ${needed.toFixed(2)} more needed.`);
}

experienceGaining(([500, 5, 50, 100, 200, 100, 30]));
console.log();
experienceGaining(([500, 5, 50, 100, 200, 100, 20]));
console.log();
experienceGaining(([400, 5, 50, 100, 200, 100, 20]));