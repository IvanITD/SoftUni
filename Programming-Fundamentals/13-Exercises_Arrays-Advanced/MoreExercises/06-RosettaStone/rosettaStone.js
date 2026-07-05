function rosettaStone(arr) {
    let n = Number(arr[0]);
    let template = arr.slice(1, 1 + n).map(row => row.split(' ').map(Number));
    let message = arr.slice(1 + n).map(row => row.split(' ').map(Number));

    function getLetter(num) {
        let value = num % 27;
        if (value === 0) {
            return ' ';
        }
        return String.fromCharCode(64 + value);
    }

    let result = '';
    for (let r = 0; r < message.length; r++) {
        for (let c = 0; c < message[r].length; c++) {
            let tRow = r % n;
            let tCol = c % template[0].length;
            let sum = message[r][c] + template[tRow][tCol];
            result += getLetter(sum);
        }
    }
    console.log(result.trimEnd());
}

rosettaStone([ '2', '59 36', '82 52', '4 18 25 19 8', '4 2 8 2 18', '23 14 22 0 22', '2 17 13 19 20', '0 9 0 22 22' ]);
console.log();
rosettaStone([ '2', '31 32', '74 37', '19 0 23 25', '22 3 12 17', '5 9 23 11', '12 18 10 22' ]);

