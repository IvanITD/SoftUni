function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let moves = 0;

    for (let line of input) {
        if (line === 'end') {
            break;
        }
        let [i1, i2] = line.split(' ').map(Number);
        moves++;

        if (i1 === i2 || i1 < 0 || i1 >= sequence.length || i2 < 0 || i2 >= sequence.length) {
            let mid = Math.floor(sequence.length / 2);
            sequence.splice(mid, 0, `-${moves}a`, `-${moves}a`);
            console.log('Invalid input! Adding additional elements to the board');
            continue;
        }

        if (sequence[i1] === sequence[i2]) {
            let element = sequence[i1];
            sequence.splice(Math.max(i1, i2), 1);
            sequence.splice(Math.min(i1, i2), 1);
            console.log(`Congrats! You have found matching elements - ${element}!`);
        } else {
            console.log('Try again!');
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
    }
    console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
}

memoryGame([ "1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end" ]);
console.log();
memoryGame([ "a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end" ]);
console.log();
memoryGame([ "a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end" ]);