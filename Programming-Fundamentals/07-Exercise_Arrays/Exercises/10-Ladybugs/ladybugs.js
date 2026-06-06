function Ladybugs(arr) {
    let fieldSize = arr[0];
    let initialPosition = arr[1];
    let field = new Array(fieldSize).fill(0);

    initialPosition = initialPosition.split(' ').map(Number);

    for (let i = 0; i < initialPosition.length; i++) {
        let index = initialPosition[i];
        if (index >= 0 && index < fieldSize) {
            field[index] = 1;
        }
    }

    for (let j = 2; j < arr.length; j++) {
            let command = arr[j].split(' ');
            let ladybugIndex = Number(command[0]);
            let direction = command[1];
            let flyLength = Number (command[2]);

            if (field[ladybugIndex] === 1) {
                field[ladybugIndex] = 0;
                let newIndex = ladybugIndex;

            if (direction === 'right') {
                newIndex += flyLength;
            }
            else if (direction === 'left') {
                newIndex -= flyLength;
            }
            while (newIndex >= 0 && newIndex < fieldSize) {
                if (field[newIndex] === 0) {
                    field[newIndex] = 1;
                    break;
                }
                if (direction === 'right') {
                    newIndex += flyLength;
                }
                else if (direction === 'left') {
                    newIndex -= flyLength;
                }
            }
        }
    }
    console.log(field.join(' '));
}

Ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
Ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
Ladybugs([ 5, '3', '3 left 2', '1 left -2']);