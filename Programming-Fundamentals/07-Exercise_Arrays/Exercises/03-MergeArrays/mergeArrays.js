function MergeArrays(arr1, arr2) {
    let mergedArr = [];
    
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            mergedArr.push(Number(arr1[i]) + Number(arr2[i]));
        }
        else {
            mergedArr.push(arr1[i] + arr2[i]);
        }
    }
    console.log(mergedArr.join(' - '));
}

MergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
MergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);