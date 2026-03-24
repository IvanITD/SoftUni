function NumbersDivisibleBy9(firstNum, secondNum) {
    // Create a variable for later use
    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {

        // CHeck if the numbers are divisible by 9
        if (i % 9 === 0) {
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);

    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

NumbersDivisibleBy9(100, 200);