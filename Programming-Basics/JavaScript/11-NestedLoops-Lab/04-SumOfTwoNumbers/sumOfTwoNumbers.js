function SumOfTwoNumber(intervalStart, intervalEnd, magicalNumber) {

    // Creating variables for later use
    let combinations = 0;
    let isFound = false;

    // Creating nested loops to check each number combination
    for (let i = intervalStart; i <= intervalEnd; i++) {
        for (let j = intervalStart; j <= intervalEnd; j++) {
            combinations++;

            if (i + j == magicalNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicalNumber})`);
                isFound = true;
                return;
            }
        }
    }

    // Iif no combination is found
    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicalNumber}`);
    }
}

SumOfTwoNumber(1, 10, 5);
SumOfTwoNumber(23, 24, 20);