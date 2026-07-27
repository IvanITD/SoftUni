function letterChangeNumbers(string) {
    let arr = string.split(/\s+/).filter(w => w !== '');
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let firstLetter = word[0];
        let lastLetter = word[word.length - 1];
        let number = Number(word.slice(1, -1));

        let firstPos = firstLetter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        let lastPos = lastLetter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;

        let result = number;

        if (firstLetter === firstLetter.toUpperCase()) {
            result = result / firstPos;
        } else {
            result = result * firstPos;
        }

        if (lastLetter === lastLetter.toUpperCase()) {
            result = result - lastPos;
        } else {
            result = result + lastPos;
        }

        sum += result;
    }
    console.log(sum.toFixed(2));
}


letterChangeNumbers('A12b s17G');
console.log('--------------------------------');
letterChangeNumbers('P34562Z q2576f   H456z');
console.log('--------------------------------');
letterChangeNumbers('a1A');