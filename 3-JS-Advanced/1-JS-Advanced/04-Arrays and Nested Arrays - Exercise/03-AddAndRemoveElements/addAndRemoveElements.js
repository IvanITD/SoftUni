function addAndRemoveElements(arrayOfCommands) {
    let result = [];

    for (let i = 0; i < arrayOfCommands.length; i++) {
        if (arrayOfCommands[i] === "add") {
            result.push(i + 1);
        } else if (arrayOfCommands[i] === "remove") {
            result.pop();
        }
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
console.log('--------------------------------');
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
console.log('--------------------------------');
addAndRemoveElements(['remove', 'remove', 'remove']);