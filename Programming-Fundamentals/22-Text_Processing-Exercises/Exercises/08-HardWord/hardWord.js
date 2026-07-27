function hardWord(arr) {
    let text = arr[0];
    let words = arr[1];

    while (text.includes('_')) {
        let hole = text.match(/_+/) [0];

        let index = words.findIndex(w => w.length === hole.length);
        let matchedWord = words[index];

        text = text.replace(hole, matchedWord);

        words.splice(index, 1);
    }

    console.log(text);
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);