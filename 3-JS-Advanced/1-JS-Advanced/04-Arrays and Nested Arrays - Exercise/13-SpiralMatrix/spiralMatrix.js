function spiralMatrix(rows, cols) {
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
    }

    let num = 1;
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            matrix[top][col] = num;
            num++;
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = num;
            num++;
        }
        right--;

        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                matrix[bottom][col] = num;
                num++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                matrix[row][left] = num;
                num++;
            }
            left++;
        }
    }

    for (let row = 0; row < rows; row++) {
        console.log(matrix[row].join(' '));
    }
}

spiralMatrix(5, 5);
console.log('--------------------------------');
spiralMatrix(3, 3);