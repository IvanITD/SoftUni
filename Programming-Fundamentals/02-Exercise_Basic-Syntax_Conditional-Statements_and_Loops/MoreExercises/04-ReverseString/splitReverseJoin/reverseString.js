function reverseString(word) {
    let reverseWord = word.split('').reverse().join('');
    console.log(reverseWord);
}

reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');