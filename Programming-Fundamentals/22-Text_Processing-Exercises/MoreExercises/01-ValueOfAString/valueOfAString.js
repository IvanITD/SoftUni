function valueOfAString(input) {
    let string = input[0];
    let caseType = input[1];
    let sum = 0;

    for (let char of string) {
        if (caseType === 'UPPERCASE' && char >= 'A' && char <= 'Z') {
            sum += char.charCodeAt(0);
        } else if (caseType === 'LOWERCASE' && char >= 'a' && char <= 'z') {
            sum += char.charCodeAt(0);
        }
    }
    console.log(`The total sum is: ${sum}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
console.log('--------------------------------');
valueOfAString(['AC/DC', 'UPPERCASE']);