/*
  O(n) time | O(n) space - where n is the total number of elements in the array
*/

function solution(matrix) {
  let res = 0;
  let seenRectangles = {};

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      const topLeft = matrix[row - 1][col - 1] * 1000;
      const top = matrix[row - 1][col] * 100;
      const left = matrix[row][col - 1] * 10;
      const current = matrix[row][col];

      const rectangle = topLeft + top + left + current;
      if (!seenRectangles.hasOwnProperty(rectangle)) {
        res++;
        seenRectangles[rectangle] = true;
      }
    }
  }

  return res;
}
