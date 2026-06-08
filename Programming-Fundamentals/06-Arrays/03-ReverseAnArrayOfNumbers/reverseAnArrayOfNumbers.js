function reverseAnArrayOfNumbers(number, arr) {
    let reversedArr = [];

    for (let i = number - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    console.log(reversedArr.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);