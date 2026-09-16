function binaryDigitsCount(n, b) {
    let count = 0;
    while (n > 0) {
        let lastBit = n % 2;

        if (lastBit === b) {
            count++;
        }

        n = n >> 1;
    }
    console.log(count);
}

binaryDigitsCount(20, 0);
console.log('---');
binaryDigitsCount(15, 1);
console.log('---');
binaryDigitsCount(10, 0);