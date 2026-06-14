function lastKNumbersSequance(n, k) {
    let sequance = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        let lastKElement = sequance.slice(-k);
        
        for (let j = 0; j < lastKElement.length; j++) {
            sum += lastKElement[j];

        }
        sequance.push(sum);

    }
    console.log(sequance.join(' '));
    
}

lastKNumbersSequance(6, 3);
console.log();
lastKNumbersSequance(8, 2);