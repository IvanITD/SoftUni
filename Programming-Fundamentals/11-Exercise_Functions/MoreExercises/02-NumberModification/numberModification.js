function numberModification(number) {
    let stringNumber = String(number);
    let average = 0;
    let count = 0;

    while (average < 5) {
        let allDigitsSum = 0;
        count = stringNumber.length;

        for (let i = 0; i < stringNumber.length; i++) {
            

            allDigitsSum += Number(stringNumber[i]);
            
            average = allDigitsSum / count;
        }

        if (average < 5) {
            stringNumber += "9";
        }
        else if (average >= 5) {
            console.log(stringNumber);
        }
    }
}

numberModification(101);
numberModification(5835);