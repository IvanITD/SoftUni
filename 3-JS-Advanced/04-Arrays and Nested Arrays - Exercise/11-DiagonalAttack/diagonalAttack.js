function diagonalAttack(input) {
    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        let row = input[i].split(' ').map(Number);
        matrix.push(row);
    }

    let n = matrix.length;
    let primary = 0;
    let secondary = 0;

    for (let i = 0; i < n; i++) {
        primary += matrix[i][i];
        secondary += matrix[i][n - 1 - i];
    }
    
    if (primary === secondary) {
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                let onPrimary = row === col;
                let onSecondary = col === n - 1 - row;
    
                if (!onPrimary && !onSecondary) {
                    matrix[row][col] = primary;
                }
            }
        }
    }
    
    for (let row = 0; row < n; row++) {
        console.log(matrix[row].join(' '));
    }
}

diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
console.log('--------------------------------');
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);