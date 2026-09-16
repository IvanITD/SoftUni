function pThBit(n, p) {
    let position = 1 << p;
    let result = n & position;

    console.log(result > 0 ? '1' : '0');
}

pThBit(2145, 5);
console.log('---');
pThBit(512, 0);
console.log('---');
pThBit(111, 8);
console.log('---');
pThBit(255, 7);