/*
  O(1) time | O(1) space
*/

function solution(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}
