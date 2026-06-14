function firstAndLastKNumbers(arr) {
    let kNumber = arr.shift(arr[0]);

    let firstKNumber = arr.slice(0, kNumber);
    let secondKNumber = arr.slice(- kNumber);


    console.log(firstKNumber.join(' '));
    console.log(secondKNumber.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
console.log();
firstAndLastKNumbers([3, 6, 7, 8, 9]);