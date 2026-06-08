function specialNumbers(number) {
    for (let i = 1; i <= number; i++) {
        let sum = 0;
        let numToString = i.toString();
        for (let j = 0; j < numToString.length; j++) {
            sum += Number(numToString[j]);
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