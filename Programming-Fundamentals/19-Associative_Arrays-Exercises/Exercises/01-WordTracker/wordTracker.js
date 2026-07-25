function wordTracker(arr) {
    let wordsToTrack = arr.shift().split(' ');

    let map = new Map();
    for (let word of wordsToTrack) {
        map.set(word, 0);
    }

    for (let word of arr) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        }
    }

    let sorted = [...map].sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`)
    }
}

wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
console.log("--------------------------------");
wordTracker(['is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);