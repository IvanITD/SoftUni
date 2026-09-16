function bitAtPosition1(n) {
    let position = 1;
    let mast = 1 << position;
    let result = n & mast;
    
    console.log(result > 0 ? '1' : '0');
}

bitAtPosition1(2);
console.log('---');
bitAtPosition1(51);
console.log('---');
bitAtPosition1(13);
console.log('---');
bitAtPosition1(24);