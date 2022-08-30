/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(matrix, column) {
  const res = [];

  for (let row = 0; row < matrix.length; row++) {
    res.push(matrix[row][column]);
  }

  return res;
}
