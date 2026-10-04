function solve() {
    const table = document.querySelector('table');
    const checkText = document.querySelector('#check p');
    const buttons = document.querySelectorAll('button');
    const rows = document.querySelectorAll('tbody tr');

    buttons[0].addEventListener('click', onCheck);
    buttons[1].addEventListener('click', onClear);

    function lineIsValid(values) {
        return values.slice().sort((a, b) => a - b).join('') === '123';
    }

    function onCheck() {
        const board = [];

        for (const row of rows) {
            const values = [];
            for (const input of row.querySelectorAll('input')) {
                values.push(Number(input.value));
            }
            board.push(values);
        }

        let isSolved = true;

        for (let i = 0; i < 3; i++) {
            const column = [board[0][i], board[1][i], board[2][i]];
            if (!lineIsValid(board[i]) || !lineIsValid(column)) {
                isSolved = false;
            }
        }

        if (isSolved) {
            table.style.border = '2px solid green';
            checkText.textContent = 'You solve it! Congratulations!';
            checkText.style.color = "green";
        } else {
            table.style.border = '2px solid red';
            checkText.textContent = 'NOP! You are not done yet...';
            checkText.style.color = 'red';
        }
    }

    function onClear() {
        for (const input of document.querySelectorAll('tbody input')) {
            input.value = '';
        }
        table.style.border = '';
        checkText.textContent = '';
        checkText.style.color = '';
    }
}