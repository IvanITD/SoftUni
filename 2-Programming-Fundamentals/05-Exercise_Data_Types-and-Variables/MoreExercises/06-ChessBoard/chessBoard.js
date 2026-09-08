function chessBoard(number) {
    let chessboard = `<div class="chessboard">`;
    let spanBlack = `   <span class="black"></span>`;
    let spanWhite = `   <span class="white"></span>`;
    let chessboardClosing = `</div>`;
    let divOpening = `    <div>`;
    let divClosing = `    </div>`;

    for (let i = 0; i < number; i++) {
        chessboard += '\n';
        chessboard += divOpening;

        for (let j = 0; j < number; j++) {
            if ((i + j) % 2 === 0) {
                chessboard += '\n';
                chessboard += spanBlack;
            }
            else {
                chessboard += '\n';
                chessboard += spanWhite;
            }
        }
        chessboard += '\n';
        chessboard += divClosing;
    }
    chessboard += '\n';
    chessboard += chessboardClosing;

    console.log(chessboard);
}

chessBoard(3);