function orbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = [];
    for (let row = 0; row < width; row++) {
        matrix[row] = [];
    }

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    for (let row = 0; row < width; row++) {
        console.log(matrix[row].join(' '));
    }
}

orbit([4, 4, 0, 0]);
console.log('--------------------------------');
orbit([5, 5, 2, 2]);
console.log('--------------------------------');
orbit([3, 3, 2, 2]);