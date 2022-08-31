/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(matrix) {
  let start = 0;
  let end = matrix.length - 1;

  while (end - start >= 1) {
    const topLeft = matrix[start][start];
    const topRight = matrix[start][end];

    matrix[start][start] = matrix[end][end];
    matrix[end][end] = topLeft;

    matrix[start][end] = matrix[end][start];
    matrix[end][start] = topRight;

    start++;
    end--;
  }

  return matrix;
}
