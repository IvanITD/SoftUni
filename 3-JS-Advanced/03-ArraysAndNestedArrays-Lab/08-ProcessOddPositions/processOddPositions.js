function processOddPositions(arr) {
    let result = arr.filter((x, i) => i % 2 !== 0).map(x => x * 2).reverse();
    return result;
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log('---');
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
console.log('---');