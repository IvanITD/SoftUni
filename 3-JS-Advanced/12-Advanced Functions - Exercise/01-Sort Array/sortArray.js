function sortArray(arr, sortType) {
    if (sortType === 'asc') {
        return arr.sort((a, b) => a - b);
    } else if (sortType === 'desc') {
        return arr.sort((a, b) => b - a);
    } else {
        throw new Error('Invalid sort type');
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));