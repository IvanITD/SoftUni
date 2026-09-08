function substring(string, firstNum, secondNum) {
    let result = '';

    for (let i = firstNum; i < firstNum + secondNum; i++) {
        if (i < string.length) {
            result += string[i];
        }
    }

    console.log(result);
}

substring('ASentence', 1, 8);
console.log("--------------------------------");
substring('SkipWord', 4, 7);
