function sumOfOddNumbers(n) {
    // Variable for later use
    let result = 0;

    for (let i = 1; i <= n * 2; i += 2) {
        console.log(i);
        result += i;
    }
    console.log(`Sum: ${result}`);
}

sumOfOddNumbers(5)