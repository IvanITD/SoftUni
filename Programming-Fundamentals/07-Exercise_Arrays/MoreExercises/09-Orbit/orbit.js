function Orbit(arrNumber) {
    let width = arrNumber[0];
    let height = arrNumber[1];
    let x = arrNumber[2];
    let y = arrNumber[3];

    let matrix = [];

    for (let row = 0; row < height; row++) {
        matrix.push([]);
        for (let col = 0; col < width; col++) {
            matrix[row].push(Math.max(Math.abs(row - x), Math.abs(col - y)) + 1);
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}

Orbit([4, 4, 0, 0]);
Orbit([5, 5, 2, 2]);