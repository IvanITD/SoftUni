function sortAnArrayBy2Criteria(arr) {
    arr.sort((a, b ) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a.toLowerCase().localeCompare(b.toLowerCase());
    })

    console.log(arr.join('\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log('--------------------------------');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('--------------------------------');
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);