function magicMatrices(matrix) {
    const expectedSum = matrix[0].reduce((sum, value) => 
        sum + value, 0);
    for (let row of matrix) {
        let rowSum = row.reduce((sum, value) => 
            sum + value, 0);

        if (rowSum !== expectedSum) return false;
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;

        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }

        if (colSum !== expectedSum) return false;
    }

    return true;
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));