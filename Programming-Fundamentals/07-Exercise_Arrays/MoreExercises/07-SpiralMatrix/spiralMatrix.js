function spiralMatrix(num1, num2) {
    let matrix = [];
    for (let row = 0; row < num1; row++) {
        matrix.push([]);

        for (let zeroes = 0; zeroes < num2; zeroes++) {
            matrix[row].push(0);
        }
    }

    let top = 0;
    let bottom = num1 - 1;
    let left = 0;
    let right = num2 - 1;
    let counter = 1;
    
    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            matrix[top][col] = counter;
            counter++;
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = counter;
            counter++;
        }
        right--;

        for (let col = right; col >= left; col--) {
            matrix[bottom][col] = counter;
            counter++;
        }
        bottom--;

        for (let row = bottom; row >= top; row--) {
            matrix[row][left] = counter;
            counter++;
        }
        left++;
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);