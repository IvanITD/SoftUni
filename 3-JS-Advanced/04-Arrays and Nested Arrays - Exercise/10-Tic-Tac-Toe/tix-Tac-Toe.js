function ticTacToe(moves) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = 'X';

    for (let i = 0; i < moves.length; i++) {
        let [row, col] = moves[i].split(' ').map(Number);

        if (dashboard[row][col] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        dashboard[row][col] = player;

        if (isWinner(dashboard, player)) {
            console.log(`Player ${player} wins!`);
            printDashboard(dashboard);
            return;
        }

        if (isFull(dashboard)) {
            console.log('The game ended! Nobody wins :(');
            printDashboard(dashboard);
            return;
        }

        player = player === 'X' ? 'O' : 'X';
    }

    function isWinner(dashboard, player) {
        for (let row = 0; row < 3; row++) {
            if (dashboard[row][0] === player &&
                dashboard[row][1] === player &&
                dashboard[row][2] === player) {
                return true;
            }
        }

        for (let col = 0; col < 3; col++) {
            if (dashboard[0][col] === player &&
                dashboard[1][col] === player &&
                dashboard[2][col] === player) {
                return true;
            }
        }

        if (dashboard[0][0] === player &&
            dashboard[1][1] === player &&
            dashboard[2][2] === player) {
            return true;
        }

        if (dashboard[0][2] === player &&
            dashboard[1][1] === player &&
            dashboard[2][0] === player) {
            return true;
        }

        return false;
    }

    function isFull(dashboard) {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (dashboard[row][col] === false) {
                    return false;
                }
            }
        }
        return true;
    }

    function printDashboard(dashboard) {
        for (let row = 0; row < 3; row++) {
            console.log(dashboard[row].join('\t'));
        }
    }
}

ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
console.log('---');
ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
console.log('---');
ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
