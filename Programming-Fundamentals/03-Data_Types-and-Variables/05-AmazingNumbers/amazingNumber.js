function AmazingNumber(num) {
    let numAsString = String(num);

    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    if (String(sum).includes('9')) {
        console.log(`${num} Amazing? True`);
    }
    else {
        console.log(`${num} Amazing? False`);
    }
}

AmazingNumber(1233);
AmazingNumber(999);