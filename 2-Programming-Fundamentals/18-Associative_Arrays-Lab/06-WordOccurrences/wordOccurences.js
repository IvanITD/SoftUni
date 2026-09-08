function wordOccurences(arr) {
    let map = new Map();

    for (let word of arr) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }

    }
    let sorted = [...map].sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log("--------------------------------");
wordOccurences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);