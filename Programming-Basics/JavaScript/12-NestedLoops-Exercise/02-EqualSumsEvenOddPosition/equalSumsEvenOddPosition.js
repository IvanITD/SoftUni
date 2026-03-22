function EqualSumsEvenOddPosition(firstNum, secondNum) {
    let result = "";
    
    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = i.toString();
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = parseInt(currentNum[j].toString());
            if (j % 2 == 0) {
                evenSum += currentDigit;
            }
            else {
                oddSum += currentDigit;
            }
        }

        if (oddSum == evenSum) {
            result += `${i} `;
        }
    }

    if (result != "") {
        console.log(result.trim());
    }
}

EqualSumsEvenOddPosition(100000, 100050);
EqualSumsEvenOddPosition(123456, 124000);
EqualSumsEvenOddPosition(299900, 300000);
EqualSumsEvenOddPosition(100115, 100120);