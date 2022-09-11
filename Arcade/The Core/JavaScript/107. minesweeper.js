/*
  O(n) time | O(n) space - where n is the total number of elements in the array
*/

function solution(matrix) {
  const maxRow = matrix.length;
  const maxCol = matrix[0].length;
  const res = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(0));
  const locations = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let row = 0; row < maxRow; row++) {
    for (let col = 0; col < maxCol; col++) {
      if (matrix[row][col]) {
        for (const [rowToAdd, colToAdd] of locations) {
          const isValidRow = matrix[row + rowToAdd];
          const isValidLocation =
            isValidRow && matrix[row + rowToAdd][col + colToAdd] !== undefined;

          if (isValidLocation) {
            res[row + rowToAdd][col + colToAdd]++;
          }
        }
      }
    }
  }

  return res;
}
