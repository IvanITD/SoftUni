function NumberPyramid(n) {
    let currentNumber = 0;

    for (let row = 1; row <= n; row++) {
        let line = "";
        for (let col = 1; col <= row; col++) {
            currentNumber++;
            line += `${currentNumber} `;
            if (currentNumber >= n) {
                break;
            }
        }
        console.log(line.trim());
        if (currentNumber >= n) {
            break;
        }
    }
}
NumberPyramid(7);
NumberPyramid(12);
NumberPyramid(15);