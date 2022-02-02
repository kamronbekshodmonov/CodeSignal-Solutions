/*
  O(n) time | O(n) space - where n is the total number of elements in the array
*/

function solution(matrix) {
  const maxRow = matrix.length;
  const maxCol = matrix[0].length;
  const res = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(0));

  for (let row = 0; row < maxRow; row++) {
    for (let col = 0; col < maxCol; col++) {
      let sum = 0;
      if (row - 1 >= 0) {
        if (matrix[row - 1][col]) sum++;
        if (matrix[row - 1][col - 1]) sum++;
        if (matrix[row - 1][col + 1]) sum++;
      }

      if (row + 1 < maxRow) {
        if (matrix[row + 1][col]) sum++;
        if (matrix[row + 1][col - 1]) sum++;
        if (matrix[row + 1][col + 1]) sum++;
      }
      if (matrix[row][col - 1]) sum++;
      if (matrix[row][col + 1]) sum++;
      res[row][col] = sum;
    }
  }

  return res;
}
