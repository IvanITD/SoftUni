function aSCIIValuesOfReversedCharacters(char1, char2, char3) {
    console.log(`${char3}${char2}${char1}`);
    console.log(`${char3.charCodeAt(0)} ${char2.charCodeAt(0)} ${char1.charCodeAt(0)}`);
}

aSCIIValuesOfReversedCharacters('a', 'b', 'c');
aSCIIValuesOfReversedCharacters('%', '2', 'o');
aSCIIValuesOfReversedCharacters('1', '5', 'p');