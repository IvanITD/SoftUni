function bitDestroyer(n, p) {
    let position = 1 << p;
    let result = n & position;
    let mask = ~position;

    console.log(n & mask);
}

bitDestroyer(1313, 5);
console.log('---');
bitDestroyer(231, 2);
console.log('---');
bitDestroyer(111, 6);
console.log('---');
bitDestroyer(111, 4);