function diagonalSums(arr) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        mainDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][arr.length - 1 - i];
    }
    console.log(`${mainDiagonal} ${secondaryDiagonal}`);
}

diagonalSums([[20, 40], [10, 60]]);
console.log('---');
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);
console.log('---');