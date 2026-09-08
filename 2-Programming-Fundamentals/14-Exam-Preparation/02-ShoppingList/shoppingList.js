function shoppingList(input) {
    let list = input.shift().split('!');

    for (let line of input) {
        if (line === 'Go Shopping!') {
            break;
        }
        let [command, item, newItem] = line.split(' ');

        switch (command) {
            case 'Urgent':
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;
            case 'Unnecessary':
                let idx = list.indexOf(item);
                if (idx !== -1) {
                    list.splice(idx, 1);
                }
                break;
            case 'Correct':
                let oldIdx = list.indexOf(item);
                if (oldIdx !== -1) {
                    list[oldIdx] = newItem;
                }
                break;
            case 'Rearrange':
                let rearrIdx = list.indexOf(item);
                if (rearrIdx !== -1) {
                    list.splice(rearrIdx, 1);
                    list.push(item);
                }
                break;
        }
    }
    console.log(list.join(', '));
}

shoppingList((["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]));
console.log();
shoppingList((["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]));