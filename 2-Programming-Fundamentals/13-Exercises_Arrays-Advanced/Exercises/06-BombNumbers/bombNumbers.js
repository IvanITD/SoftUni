function bombNumbers(sequenceOfNumbers, specialBombNumber) {
    let bomb = specialBombNumber[0];
    let power = specialBombNumber[1];

    for (let i = 0;  i < sequenceOfNumbers.length; i++) {
        if (sequenceOfNumbers[i] === bomb) {
            let startIndex = Math.max(0, i - power);
            let deleteCount = power * 2 + 1;

            sequenceOfNumbers.splice(startIndex, deleteCount);
            i = startIndex - 1;
        }
    }

    let sum = sequenceOfNumbers.reduce((a, b) => a + b, 0);
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log();
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
console.log();
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
console.log();
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);