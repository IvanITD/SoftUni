function smallestTwoNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let smallest = sorted.slice(0, 2);
    console.log(smallest.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
console.log('---');
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
console.log('---');