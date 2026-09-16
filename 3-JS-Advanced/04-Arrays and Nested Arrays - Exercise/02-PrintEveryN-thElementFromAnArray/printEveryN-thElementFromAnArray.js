function printEveryNthElementFromAnArray(arrayOfStrings, number) {
    let result = [];

    for (let i = 0; i < arrayOfStrings.length; i += number) {
        result.push(arrayOfStrings[i]);
    }
    return result
}

console.log(printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2));
console.log('--------------------------------');
console.log(printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2));
console.log('--------------------------------');
console.log(printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6));