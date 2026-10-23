function extractIncreasingSubsequenceFromArray(numbersArr) {
    let result = [];
    let biggest = numbersArr[0];

    for (let number of numbersArr) {
        if (number >= biggest) {
            biggest = number;
            result.push(number);
        }
    }
    return result;
}

console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log('--------------------------------');
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]));
console.log('--------------------------------');
console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]));