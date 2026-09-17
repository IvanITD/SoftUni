function stringGame(input) {
    let str = input[0];

    for (let i = 1; i < input.length; i++) {
        let line = input[i];

        if (line === 'Done') {
            break;
        }

        let parts = line.split(' ');
        let command = parts[0];

        if (command === 'Change') {
            let char = parts[1];
            let replacement = parts[2];
            str = str.split(char).join(replacement);
            console.log(str);
        } else if (command === 'Includes') {
            let substring = parts.slice(1).join(' ');
            console.log(str.includes(substring) ? 'True' : 'False');
        } else if (command === 'End') {
            let substring = parts.slice(1).join(' ');
            console.log(str.endsWith(substring) ? 'True' : 'False');
        } else if (command === 'Uppercase') {
            str = str.toUpperCase();
            console.log(str);
        } else if (command === 'FindIndex') {
            let char = parts[1];
            console.log(str.indexOf(char));
        } else if (command === 'Cut') {
            let startIndex = Number(parts[1]);
            let count = Number(parts[2]);
            let cut = str.substring(startIndex, startIndex + count);
            str = cut;
            console.log(cut);
        }
    }
}

stringGame(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"]);
console.log('--------------------------------');
stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"]);
