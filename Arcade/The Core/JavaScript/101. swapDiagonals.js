/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(matrix) {
  let start = 0;
  let end = matrix.length - 1;

  while (end - start >= 1) {
    const topLeft = matrix[start][start];
    const bottomLeft = matrix[end][start];

    matrix[start][start] = matrix[start][end];
    matrix[start][end] = topLeft;

    matrix[end][start] = matrix[end][end];
    matrix[end][end] = bottomLeft;

    start++;
    end--;
  }

  return matrix;
}
