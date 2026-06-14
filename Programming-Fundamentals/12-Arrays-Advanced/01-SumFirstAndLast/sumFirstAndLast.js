function sumFirstAndLast(arr) {
    let firstNumber = Number(arr[0]);
    let lastNumber = Number(arr[arr.length - 1]);

    let sum = firstNumber + lastNumber;

    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);