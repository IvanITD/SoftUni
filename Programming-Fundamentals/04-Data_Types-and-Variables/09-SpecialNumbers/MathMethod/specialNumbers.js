function specialNumbers(number) {
    for (let i = 1; i <= number; i++) {
        let currentNum = i;
        let sum = 0;
        
        while (currentNum > 0) {
            sum += currentNum % 10;       // grab last digit
            currentNum = parseInt(currentNum / 10);  // remove last digit
        }
        
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(15);
specialNumbers(20);