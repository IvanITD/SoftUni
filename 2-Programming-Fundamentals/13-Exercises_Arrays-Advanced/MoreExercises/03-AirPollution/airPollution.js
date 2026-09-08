function airPollution(map, forces) {
    let matrix = map.map(row => row.split(' ').map(Number));

    for (let force of forces) {
        let [command, value] = force.split(' ');
        value = Number(value);

        if (command === 'breeze') {
            for (let c = 0; c < matrix[value].length; c++) {
                matrix[value][c] = Math.max(0, matrix[value][c] - 15);
            }
        } else if (command === 'gale') {
            for (let r = 0; r < 5; r++) {
                matrix[r][value] = Math.max(0, matrix[r][value] - 20);
            }
        } else if (command === 'smog') {
            for (let r = 0; r < 5; r++) {
                for (let c = 0; c < 5; c++) {
                    matrix[r][c] += value;
                }
            }
        }
    }

    let polluted = [];
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
            if (matrix[r][c] >= 50) {
                polluted.push(`[${r}-${c}]`);
            }
        }
    }
    if (polluted.length > 0) {
        console.log(`Polluted areas: ${polluted.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}

airPollution(['5 7 72 14 4', '41 35 37 27 33', '23 16 27 42 12', '2 20 28 39 14', '16 34 31 10 24'], ['breeze 1', 'gale 2', 'smog 25']);
console.log();
airPollution(['5 7 3 28 32', '41 12 49 30 33', '3 16 20 42 12', '2 20 10 39 14', '7 34 4 27 24'], ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);
console.log();
airPollution(['5 7 2 14 4', '21 14 2 5 3', '3 16 7 42 12', '2 20 8 39 14', '7 34 1 10 24'], ['breeze 1', 'gale 2', 'smog 35']);