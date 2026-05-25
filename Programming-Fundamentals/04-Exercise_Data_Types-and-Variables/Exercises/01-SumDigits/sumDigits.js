function SumDigits(number) {
    let sum = 0;
    let numberAsString = String(number);

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }
    console.log(sum);
}

SumDigits(245678);
SumDigits(97561);
SumDigits(543);