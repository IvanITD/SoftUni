function serializeString(arr) {
    let string = arr[0];
    let charIndexes = new Map();

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (!charIndexes.has(char)) {
            charIndexes.set(char, []);
        }
        charIndexes.get(char).push(i);
    }

    let printed = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (!printed[char]) {
            printed[char] = true;
            console.log(`${char}:${charIndexes.get(char).join('/')}`);
        }
        charIndexes.get(char).join('/');
    }
}

serializeString(["abababa"]);
console.log('--------------------------------');
serializeString(["avjavamsdmcalsdm"]);