function houseParty(arr) {
    let guests = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        let tokens = command.split(" ");
        let name = tokens[0];

        if (command.includes("is going!")) {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        } else {
            if (guests.includes(name)) {
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guests.join("\n"));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
console.log();
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);