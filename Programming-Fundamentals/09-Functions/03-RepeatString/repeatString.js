function repeatString(string, number) {
    let result = '';

    for (let i = 0; i < number; i++) {
        result += string;
    }
    return result;
}

let finalResult1 = repeatString("abc", 3);
let finalResult2 = repeatString("String", 2);

console.log(finalResult1);
console.log(finalResult2);