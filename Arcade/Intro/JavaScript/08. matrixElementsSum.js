/*
  O(n) time | O(1) space - where n is the total number of elements in the array
*/

function solution(matrix) {
  let sum = 0;
  const maxRow = matrix.length;
  const maxCol = matrix[0].length;

  for (let row = 0; row < maxRow; row++) {
    for (let col = 0; col < maxCol; col++) {
      if (row - 1 >= 0 && matrix[row - 1][col] === 0) {
        matrix[row][col] = 0;
      }

      sum += matrix[row][col];
    }
  }

  return sum;
}
