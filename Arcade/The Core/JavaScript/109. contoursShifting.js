/*
  O(n) time | O(1) space - where n is the total number of elements in the array
*/

function solution(matrix) {
  let prev;
  let current;
  let row = 0;
  let col = 0;
  let maxRow = matrix.length;
  let maxCol = matrix[0].length;

  while (row < maxRow && col < maxCol) {
    if (row === maxRow - 1) {
      if (col % 2 === 0) {
        prev = matrix[row][maxCol - 1];
        for (let i = col; i < maxCol; i++) {
          current = matrix[row][i];
          matrix[row][i] = prev;
          prev = current;
        }
      } else {
        prev = matrix[row][col];
        for (let i = maxCol - 1; i >= col; i--) {
          current = matrix[row][i];
          matrix[row][i] = prev;
          prev = current;
        }
      }
      break;
    }

    if (col === maxCol - 1) {
      if (row % 2 === 0) {
        prev = matrix[maxRow - 1][col];
        for (let i = row; i < maxRow; i++) {
          current = matrix[i][col];
          matrix[i][col] = prev;
          prev = current;
        }
      } else {
        prev = matrix[row][col];
        for (let i = maxRow - 1; i >= row; i--) {
          current = matrix[i][col];
          matrix[i][col] = prev;
          prev = current;
        }
      }

      break;
    }

    if (row % 2 === 0 && col % 2 === 0) {
      prev = matrix[row + 1][col];
      for (let i = col; i < maxCol; i++) {
        current = matrix[row][i];
        matrix[row][i] = prev;
        prev = current;
      }
      row++;

      for (let i = row; i < maxRow; i++) {
        current = matrix[i][maxCol - 1];
        matrix[i][maxCol - 1] = prev;
        prev = current;
      }
      maxCol--;

      for (let i = maxCol - 1; i >= col; i--) {
        current = matrix[maxRow - 1][i];
        matrix[maxRow - 1][i] = prev;
        prev = current;
      }
      maxRow--;

      for (let i = maxRow - 1; i >= row; i--) {
        current = matrix[i][col];
        matrix[i][col] = prev;
        prev = current;
      }
      col++;
    } else {
      prev = matrix[row][col + 1];
      for (let i = row; i < maxRow; i++) {
        current = matrix[i][col];
        matrix[i][col] = prev;
        prev = current;
      }
      col++;

      for (let i = col; i < maxCol; i++) {
        current = matrix[maxRow - 1][i];
        matrix[maxRow - 1][i] = prev;
        prev = current;
      }
      maxRow--;

      for (let i = maxRow - 1; i >= row; i--) {
        current = matrix[i][maxCol - 1];
        matrix[i][maxCol - 1] = prev;
        prev = current;
      }
      maxCol--;

      for (let i = maxCol - 1; i >= col; i--) {
        current = matrix[row][i];
        matrix[row][i] = prev;
        prev = current;
      }
      row++;
    }
  }

  return matrix;
}
