function wordsUppercase(text) {
    let words = text.match(/\b\w+\b/g);
    let result = words.map(word => word.toUpperCase()).join(', ');
    console.log(result);
}

wordsUppercase('Hi, how are you?');
console.log('---');
wordsUppercase('hello');
