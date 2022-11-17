/*
  O(1) time | O(1) space
*/

function solution(notation) {
  const board = [];
  const rotatedBoard = [];

  notation.split("/").forEach((row) => {
    const rowPieces = [];

    for (const piece of row) {
      if (isNaN(Number(piece))) {
        rowPieces.push(piece);
      } else {
        for (let i = 0; i < Number(piece); i++) {
          rowPieces.push(null);
        }
      }
    }

    board.push(rowPieces);
  });

  for (let col = 0; col <= 7; col++) {
    const rowPieces = [];
    for (let row = 7; row >= 0; row--) {
      rowPieces.push(board[row][col]);
    }
    rotatedBoard.push(rowPieces);
  }

  const result = [];
  rotatedBoard.forEach((rowPieces) => {
    let i = 0;
    const editedRow = [];

    while (i <= 7) {
      if (rowPieces[i] === null) {
        let counter = 0;
        while (i <= 7 && rowPieces[i] === null) {
          i++;
          counter++;
        }
        editedRow.push(counter);
      } else {
        editedRow.push(rowPieces[i]);
        i++;
      }
    }

    result.push(editedRow.join(""));
  });

  return result.join("/");
}
