function ReverseString(word) {
    let reverseWord = word.split('').reverse().join('');
    console.log(reverseWord);
}

ReverseString('Hello');
ReverseString('SoftUni');
ReverseString('1234');