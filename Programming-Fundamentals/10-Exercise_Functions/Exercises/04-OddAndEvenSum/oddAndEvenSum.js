function oddAndEvenSum(number) {
    let numberToString = String(number);

    let digits = numberToString.split('').map(Number);

    let evenNum = 0;
    let oddNum = 0;

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
            evenNum += digits[i];
        }
        else {
            oddNum += digits[i];
        }
    }

    console.log(`Odd sum = ${oddNum}, Even sum = ${evenNum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);