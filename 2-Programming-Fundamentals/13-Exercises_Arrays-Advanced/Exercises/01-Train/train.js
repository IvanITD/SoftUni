function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command.includes('Add')) {
            let tokens = command.split(' ');
            let passengers = Number(tokens[1]);

            wagons.push(passengers);
        } else {
            let passengers = Number(command);

            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passengers <= capacity) {
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
console.log();
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);