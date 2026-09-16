function biggerHalf(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let half = Math.floor(sorted.length / 2);
    let result = sorted.slice(half);
    return result;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log('---');
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
console.log('---');