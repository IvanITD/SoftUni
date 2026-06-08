function nonDecreasingSubset(arr) {
    let maxNumber = 0;
    let result = arr.filter(number => {
        if (number >= maxNumber) {
            maxNumber = number;
            return true;
        }
        return false;
    });
    console.log(result.join(' '));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);