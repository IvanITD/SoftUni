function NonDecreasingSubset(arr) {
    let result = [];
    let maxNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxNumber) {
            maxNumber = arr[i];
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}

NonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
NonDecreasingSubset([ 1, 2, 3, 4]);
NonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);