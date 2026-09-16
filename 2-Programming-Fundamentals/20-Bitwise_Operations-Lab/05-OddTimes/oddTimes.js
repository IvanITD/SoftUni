function oddTimes(arrNumbers) {
    let result = 0;
    
    for (let i = 0; i < arrNumbers.length; i++) {
        result = result ^ arrNumbers[i];
    }
    console.log(result);
}

oddTimes([1, 2, 3, 2, 3, 1, 3]);
console.log('---');
oddTimes([5, 7, 2, 7, 5, 2, 5]);