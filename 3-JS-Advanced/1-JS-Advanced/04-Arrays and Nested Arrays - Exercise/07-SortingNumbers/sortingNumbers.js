function sortingNumbers(numbers) {
    const sortedNumbers = [];
    numbers.sort((a, b) => a -b);
    while (numbers.length > 0) {
        sortedNumbers.push(numbers.shift());
        sortedNumbers.push(numbers.pop());
    }
    return sortedNumbers;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log('--------------------------------');
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));