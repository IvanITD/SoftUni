function triBitSwitch(n, p) {
    let position = 1 << p;
    let mask = 7 << p;
    let result = n & mask;

    console.log(n ^ mask);
}

triBitSwitch(1234, 7);
console.log('---');
triBitSwitch(44444, 4);