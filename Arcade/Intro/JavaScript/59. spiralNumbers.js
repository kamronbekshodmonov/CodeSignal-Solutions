/*
  O(n) time | O(n) space - where n is the total number of elements in the array
*/

function solution(n) {
  let pointer = 1;
  let maxRow = n;
  let maxCol = n;
  let startRow = 0;
  let startCol = 0;
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (startRow < maxRow && startCol < maxCol) {
    for (let col = startCol; col < maxCol; col++) {
      res[startRow][col] = pointer;
      pointer++;
    }
    startRow++;

    for (let row = startRow; row < maxRow; row++) {
      res[row][maxCol - 1] = pointer;
      pointer++;
    }
    maxCol--;

    for (let col = maxCol - 1; col >= startCol; col--) {
      res[maxRow - 1][col] = pointer;
      pointer++;
    }
    maxRow--;

    for (let row = maxRow - 1; row >= startRow; row--) {
      res[row][startCol] = pointer;
      pointer++;
    }
    startCol++;
  }

  return res;
}
