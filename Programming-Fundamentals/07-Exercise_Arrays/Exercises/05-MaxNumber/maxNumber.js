function MaxNumber(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isBigger = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];

            if (num <= rightNum) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result.push(num);
        }
    }
    console.log(result.join(' '));
}

MaxNumber([1, 4, 3, 2]);
MaxNumber([14, 24, 3, 19, 15, 17]);
MaxNumber([41, 41, 34, 20]);
MaxNumber([27, 19, 42, 2, 13, 45, 48]);