/*
  O(n) time | O(1) space - where n is the input width
*/

function solution(matrix, width, center, t) {
  for (let k = 0; k < t % 8; k++) {
    let midX = center[0];
    let midY = center[1];
    let endX = center[0] + (width - 1) / 2;
    let endY = center[1] + (width - 1) / 2;
    let startX = center[0] - (width - 1) / 2;
    let startY = center[1] - (width - 1) / 2;

    for (let i = 0; i < (width - 1) / 2; i++) {
      let temp = matrix[startX][startY];
      matrix[startX][startY] = matrix[midX][startY];
      matrix[midX][startY] = matrix[endX][startY];
      matrix[endX][startY] = matrix[endX][midY];
      matrix[endX][midY] = matrix[endX][endY];
      matrix[endX][endY] = matrix[midX][endY];
      matrix[midX][endY] = matrix[startX][endY];
      matrix[startX][endY] = matrix[startX][midY];
      matrix[startX][midY] = temp;

      startX++;
      startY++;
      endX--;
      endY--;
    }
  }

  return matrix;
}
