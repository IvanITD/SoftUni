function SumFirstAndLastArrayElements(arr) {
    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];
    let sum = firstElement + lastElement;

    console.log(sum);
}

SumFirstAndLastArrayElements([20, 30, 40]);
SumFirstAndLastArrayElements([10, 17, 22, 33]);
SumFirstAndLastArrayElements([11, 58, 69]);