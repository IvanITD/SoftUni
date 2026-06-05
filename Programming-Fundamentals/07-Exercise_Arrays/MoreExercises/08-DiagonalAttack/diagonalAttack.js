function DiagonalAttack(stringArr) {
    let matrix = [];
    for (let i = 0; i < stringArr.length; i++) {
        matrix.push(stringArr[i].split(' ').map(Number));
    }

    let mainSum = 0;
    let antiSum = 0;
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        mainSum += matrix[i][i];
        antiSum += matrix[i][n - 1 - i];
    }

    if (mainSum === antiSum) {
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                if (row !== col && row + col !== n - 1) {
                    matrix[row][col] = mainSum;
                }
            }
        }
    }

    for (let row = 0; row < n; row++) {
        console.log(matrix[row].join(' '));
    }
}

DiagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
DiagonalAttack(['1 1 1', '1 1 1', '1 1 0']);