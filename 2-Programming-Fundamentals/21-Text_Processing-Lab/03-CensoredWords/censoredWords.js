function censoredWords(text, word) {
    let censoredWord = text.replace(word, repeat(word));
    let stars = '*'.repeat(word.length);
    let censored = text;
    
    while (censored.includes(word)) {
        censored = censored.replace(word, stars);
    }

    function repeat(word) {
        return '*'.repeat(word.length);
    }
    console.log(censored);
}

censoredWords('A small sentence with some words', 'small');
console.log("--------------------------------");
censoredWords('Find the hidden word', 'hidden');