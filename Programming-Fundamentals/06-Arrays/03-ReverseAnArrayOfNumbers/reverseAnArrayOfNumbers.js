function ReverseAnArrayOfNumbers(number, arr) {
    let reversedArr = [];

    for (let i = number - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    console.log(reversedArr.join(' '));
}

ReverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
ReverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
ReverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);