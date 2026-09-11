function sameNumbers(num) {
    let numAsString = num.toString();
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        if (numAsString[i] !== numAsString[0]) {
            isSame = false;
            sum += Number(numAsString[i]);
        } else {
            sum += Number(numAsString[i]);
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
console.log('---');
sameNumbers(1234);
console.log('---');