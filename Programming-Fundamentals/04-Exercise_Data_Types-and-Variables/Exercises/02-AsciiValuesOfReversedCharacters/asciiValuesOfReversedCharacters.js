function ASCIIValuesOfReversedCharacters(char1, char2, char3) {
    console.log(`${char3}${char2}${char1}`);
    console.log(`${char3.charCodeAt(0)} ${char2.charCodeAt(0)} ${char1.charCodeAt(0)}`);
}

ASCIIValuesOfReversedCharacters('a', 'b', 'c');
ASCIIValuesOfReversedCharacters('%', '2', 'o');
ASCIIValuesOfReversedCharacters('1', '5', 'p');