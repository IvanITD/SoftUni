function signCheck(num1, num2, num3) {
    let negativeCounter = 0;

    if (num1 < 0) {
        negativeCounter ++;
    }
    
    if (num2 < 0) {
        negativeCounter ++;
    }

    if (num3 < 0) {
        negativeCounter ++;
    }

    if (negativeCounter % 2 === 1) {
        console.log('Negative');
    }
    else {
        console.log('Positive');
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);