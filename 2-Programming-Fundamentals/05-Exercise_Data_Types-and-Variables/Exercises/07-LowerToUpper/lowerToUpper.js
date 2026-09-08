function lowerToUpper(char) {
    let upperChar = char.toUpperCase();

    if (char === upperChar) {
        console.log(`upper-case`);
    }
    else {
        console.log(`lower-case`);
    }
}

lowerToUpper('L');
lowerToUpper('f');