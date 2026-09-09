function squareOfStars(input) {
    let n = Number(input);
    
    for (let i = 0; i < n; i++) {
        console.log('* '.repeat(n));
    }
}

squareOfStars(1);
console.log('---');
squareOfStars(2);
console.log('---');
squareOfStars(5);
console.log('---');
squareOfStars(7);
console.log('---');