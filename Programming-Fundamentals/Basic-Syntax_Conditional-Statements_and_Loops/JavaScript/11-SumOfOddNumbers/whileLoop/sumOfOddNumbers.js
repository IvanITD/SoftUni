function SumOfOddNumbers(number) {
    let printedNumbers = 0;
    let currentNumber = 1;

    let sum = 0;

    while (printedNumbers < number) {
        console.log(currentNumber);

        sum += currentNumber;

        currentNumber += 2;
        printedNumbers++;
    }
    console.log(`Sum: ${sum}`);
}

SumOfOddNumbers(5);
SumOfOddNumbers(3);