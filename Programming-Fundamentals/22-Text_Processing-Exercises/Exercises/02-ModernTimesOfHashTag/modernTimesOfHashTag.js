function modernTimesOfHashTag(string) {
    let words = string.split(' ');

    for (let word of words) {
        if (word.startsWith('#')) {
            let tag = word.slice(1);

            if (/^[a-zA-Z]+$/.test(tag)) {
                console.log(tag);
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log("--------------------------------");
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');