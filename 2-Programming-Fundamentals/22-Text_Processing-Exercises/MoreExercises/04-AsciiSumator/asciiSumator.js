function asciiSumator(input) {
    let char1 = input[0];
    let char2 = input[1];
    let string = input[2];

    let low = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let high = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    let sum = 0;

    for (let char of string) {
        let code = char.charCodeAt(0);
        if (code > low && code < high) {
            sum += code;
        }
    }

    console.log(sum);
}

asciiSumator(['.', '@', 'dsg12gr5653feee5']);
console.log('--------------------------------');
asciiSumator(['?', 'E', '@ABCEF']);
console.log('--------------------------------');
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);