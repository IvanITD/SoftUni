function SpecialNumbers(number) {
    let sum = 0;
    
    for (let i = 1; i <= number; i++) {
        sum += i;

        if (i === 5 || i === 7 || i === 14) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

SpecialNumbers(15);
SpecialNumbers(20);