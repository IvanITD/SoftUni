function oddOccurrences(arr) {
    let words = arr.split(' ');

    let map = new Map();
    for (let word of words) {
        let key = word.toLowerCase();
        if (!map.has(key)) {
            map.set(key, 1);
        } else {
            map.set(key, map.get(key) + 1);
        }
    }

    let result = [];
    for (let [word, count] of map) {
        if (count % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log("--------------------------------");
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');