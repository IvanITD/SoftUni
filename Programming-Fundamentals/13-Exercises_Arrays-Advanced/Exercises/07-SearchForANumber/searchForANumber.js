function searchForANumber(takeNumberOfElements, deleteNumberOfElements) {
    let [takeCount, deleteCount, searchNum] = deleteNumberOfElements;
    
    let reducedArr = takeNumberOfElements.slice(0, takeCount);
    reducedArr.splice(0, deleteCount);

    let searchNumOccurrences = reducedArr.filter(num => num === searchNum).length;
    console.log(`Number ${searchNum} occurs ${searchNumOccurrences} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
console.log();
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);