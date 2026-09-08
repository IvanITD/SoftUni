function countStringOccurences(text, word) {
    let words = text.split(' ');

    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            count++;
        }
    }
    console.log(count);
}

countStringOccurences('This is a word and it also is a sentence', 'is');
console.log("--------------------------------");
countStringOccurences('softuni is great place for learning new programming languages','softuni');