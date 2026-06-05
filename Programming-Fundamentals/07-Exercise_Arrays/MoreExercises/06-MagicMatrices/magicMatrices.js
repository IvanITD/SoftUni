function MagicMatrices(arr) {
    let isMagic = true;

    let targetSum = 0;
    for (let col = 0; col < arr[0].length; col++) {
        targetSum += arr[0][col];
    }

    for (let row = 1; row < arr.length; row++) {
        let currentRowSum = 0;
        for (let col = 0; col < arr[row].length; col++) {
            currentRowSum += arr[row][col];
        }
        if (currentRowSum !== targetSum) {
            isMagic = false;
        }
    }

    for (let col = 0; col < arr[0].length; col++) {
        let currentColSum = 0;
        for (let row = 0; row < arr.length; row++) {
            currentColSum += arr[row][col];
        }
        if (currentColSum !== targetSum) {
            isMagic = false;
        }
    }
    
    console.log(isMagic);
}

MagicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
MagicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
MagicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);