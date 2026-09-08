function sorting(arr) {
    arr.sort((a, b) => b - a);

    let sortedArr = [];

    while (arr.length > 0) {
        let maxNum = arr.shift();
        let minNum = arr.pop();

        sortedArr.push(maxNum, minNum);
    }

    console.log(sortedArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log();
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);