function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = i - 1; j >= 0 && j >= i - k; j--) {
            sum += result[j];
        }
        result.push(sum);
    }

    return result;
}

console.log(lastKNumbersSequence(6, 3));
console.log('---');
console.log(lastKNumbersSequence(8, 2));
console.log('---');