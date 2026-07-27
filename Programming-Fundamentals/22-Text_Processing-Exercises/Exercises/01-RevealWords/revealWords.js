function revealWords(firstString, secondString) {
    let words = firstString.split(', ');
    let parts = secondString.split(' ');

    for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes('*')) {
            for (let word of words) {
                if (parts[i].length === word.length) {
                    parts[i] = word;
                }
            }
        }
    }

    console.log(parts.join(' '));
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
console.log("--------------------------------");
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');