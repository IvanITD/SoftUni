function EqualSums(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }

        if (leftSum === rightSum) {
            console.log(i);
            return;
        }
    }
    console.log('no');
}

EqualSums([1, 2, 3, 3]);
EqualSums([1, 2]);
EqualSums([1]);
EqualSums([1, 2, 3]);
EqualSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);