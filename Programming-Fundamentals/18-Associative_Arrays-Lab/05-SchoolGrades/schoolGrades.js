function schoolGrades(arr) {
    let grades = {};

    for (let line of arr) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let newGrades = tokens.map(Number);

        if (!grades[name]) {
            grades[name] = newGrades;
        } else {
            grades[name] = grades[name].concat(newGrades);
        }
    }

    let sortedNames = Object.keys(grades).sort();

    for (let name of sortedNames) {
        let sum = grades[name].reduce((a, b) => a + b, 0);
        let avg = sum / grades[name].length;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
console.log("--------------------------------");
schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);