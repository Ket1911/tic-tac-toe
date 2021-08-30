let currentPlayer = 'x';
let gameField = [
        ['x', 'x', 'o'],
        ['o', 'x', 'x'],
        ['o', 'o', 'x'],
];

// console.log(gameField[0][0] === gameField[0][1] === gameField[0][2] != null);


    

// getCurrentPlayerSymbol() {
//     return currentPlayer;
// }

// function nextTurn(rowIndex, columnIndex) {
//     if (gameField[rowIndex][columnIndex] != null) {
//         return;
//     }
    
//     gameField[rowIndex][columnIndex] = currentPlayer;

//     currentPlayer = currentPlayer == 'x' ? 'o' : 'x';
    
// }

// nextTurn(1, 0);

// console.log(gameField[0][0]);
// // isFinished() {

// }

function getWinner(arr) {

    for (let i = 0; i < 3; i++) {
        
        if (gameField[i][0] === gameField[i][1] && gameField[i][0] === gameField[i][2] && gameField[i][0] != null) {
            // console.log('1');
            // console.log(i);
            return gameField[i][0];
        } else if (gameField[0][i] === gameField[1][i] && gameField[0][i] === gameField[2][i] && gameField[0][i] != null) {
            // console.log('2');
            return gameField[0][i];
        } 
    } 

    if (gameField[0][0] == gameField[1][1] && gameField[0][0] == gameField[2][2] && gameField[0][0] != null) {
        // console.log('3');
        return gameField[0][0];
    } else if (gameField[0][2] == gameField[1][1] && gameField[0][2] == gameField[2][0] && gameField[0][2] != null) {
        // console.log('4');
        return gameField[0][2];
    } else {
        return null;
    }
    
}

console.log(getWinner(gameField));

// noMoreTurns() {

// }

// isDraw() {

// // }

// getFieldValue(rowIndex, colIndex) {
//     if (this.gameField[rowIndex][columnIndex] == null) {
//         return null;
//     }
//     return this.gameField[rowIndex][colIndex];
// }