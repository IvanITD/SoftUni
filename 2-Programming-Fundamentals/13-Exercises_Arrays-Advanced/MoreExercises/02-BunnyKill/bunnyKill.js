function bunnyKill(input) {
    let matrix = input.slice(0, -1).map(row => row.split(' ').map(Number));

    let bombs = input[input.length - 1].split(' ').map(bomb => bomb.split(',').map(Number));

    let snowballDamage = 0;
    let snowballKills = 0;

    for (let i = 0; i < bombs.length; i++) {
        let [row, col] = bombs[i];
        let bombDamage = matrix[row][col];

        if (bombDamage <= 0) {
            continue;
        }

        let startRow = Math.max(0, row - 1);
        let endRow = Math.min(matrix.length - 1, row + 1);
        let startCol = Math.max(0, col - 1);
        let endCol = Math.min(matrix[0].length - 1, col + 1);

        for (let r = startRow; r <= endRow; r++) {
            for (let c = startCol; c <= endCol; c++) {
                matrix[r][c] -= bombDamage;
            }
        }
        snowballDamage += bombDamage;
        snowballKills++;
    }

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] > 0) {
                snowballDamage += matrix[r][c];
                snowballKills++;
            }
        }
    }

    console.log(snowballDamage);
    console.log(snowballKills);
}

bunnyKill(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10', '2,2 0,1']);
console.log();
bunnyKill(['10 10 10', '10 10 10', '10 10 10', '0,0']);