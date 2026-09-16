function rotateArray(arrayOfStrings, number) {
    for (let i = 0; i < number; i++) {
        let lastElement = arrayOfStrings.pop();
        arrayOfStrings.unshift(lastElement);
    }

    console.log(arrayOfStrings.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
console.log('--------------------------------');
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
console.log('--------------------------------');