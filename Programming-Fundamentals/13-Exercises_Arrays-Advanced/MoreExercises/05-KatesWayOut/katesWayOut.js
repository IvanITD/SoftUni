function katesWayOut(arr) {
    let n = Number(arr[0]);
    let maze = arr.slice(1).map(row => row.split(''));

    let startRow, startCol;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < maze[r].length; c++) {
            if (maze[r][c] === 'k') {
                startRow = r;
                startCol = c;
                maze[r][c] = ' ';
            }
        }
    }

    function isExit(r, c) {
        return r === 0 || r === n - 1 || c === 0 || c === maze[r].length - 1;
    }

    let maxMoves = 0;
    let direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    function dfs(row, col, moves) {
        if (isExit(row, col)) {
            maxMoves = Math.max(maxMoves, moves + 1);
        }

        maze[row][col] = '#';

        for (let [dr, dc] of direction) {
            let nr = row + dr;
            let nc = col + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < maze[nr].length && maze[nr][nc] === ' ') {
                dfs(nr, nc, moves + 1);
            }
        }
        maze[row][col] = ' ';
    }

    dfs(startRow, startCol, 0);

    if (maxMoves > 0) {
        console.log(`Kate got out in ${maxMoves} moves`);
    } else {
        console.log("Kate cannot get out");
    }
}

katesWayOut([ 4, "######", "## k#", "## ###", "## ###" ]);
console.log();
katesWayOut([ 5, "######", "## k#", "## ###", "######", "## ###" ]);
console.log();