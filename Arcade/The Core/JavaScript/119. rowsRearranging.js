/*
  O(n + m^2) time | O(1) space - where n is the total number of elements in the array and m is the length of the input array
*/

function solution(matrix) {
  if (matrix.length === 1) return true;
  rearrangeFirstCol(matrix);

  for (let col = 0; col < matrix[0].length; col++) {
    for (let row = 1; row < matrix.length; row++) {
      if (matrix[row][col] <= matrix[row - 1][col]) return false;
    }
  }

  return true;
}

function rearrangeFirstCol(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let minValueIndex = i;
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[minValueIndex][0] > matrix[j][0]) minValueIndex = j;
    }

    swap(i, minValueIndex, matrix);
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
