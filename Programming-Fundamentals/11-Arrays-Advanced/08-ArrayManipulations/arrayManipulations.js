function arrayManipulations(arr) {
    let arrayNumbers = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum] = arr[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
        case "Add":
            arrayNumbers.push(firstNum);
            break;
        case "Remove":
            arrayNumbers = arrayNumbers.filter(el => el !== firstNum);
            break;
        case "RemoveAt":
            arrayNumbers.splice(firstNum, 1);
            break;
        case "Insert":
            arrayNumbers.splice(secondNum, 0, firstNum);
            break;
        }
    }
    console.log(arrayNumbers.join(' '));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
console.log();
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);