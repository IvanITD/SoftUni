function EqualArrays(firstArr, secondArr) {
    let sum = 0;
    
    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    for (let num of firstArr) {
        sum += Number(num);
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}

EqualArrays(['10','20','30'], ['10','20','30']);
EqualArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
EqualArrays(['1'], ['10']);