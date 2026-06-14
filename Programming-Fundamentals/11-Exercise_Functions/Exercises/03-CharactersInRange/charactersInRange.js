function charactersInRange(char1, char2) {
    let charCode1 = char1.charCodeAt(0);
    let charCode2 = char2.charCodeAt(0);

    let stringOutput = '';

    let startCode = Math.min(charCode1, charCode2);
    let endCode = Math.max(charCode1, charCode2);
    
    for (let i = startCode + 1; i < endCode; i++) {
        stringOutput += String.fromCharCode(i) + ' ';
    }

    console.log(stringOutput);
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');