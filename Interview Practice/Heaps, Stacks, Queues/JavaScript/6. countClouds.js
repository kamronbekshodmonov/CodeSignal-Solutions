/*
  O(n) time | O(n) space - where n is the total number of elements in the array
*/

function solution(skyMap) {
  let res = 0;

  for (let row = 0; row < skyMap.length; row++) {
    for (let col = 0; col < skyMap[0].length; col++) {
      if (skyMap[row][col] === "1") {
        res++;
        dfsHelper(row, col, skyMap);
      }
    }
  }

  return res;
}

function dfsHelper(row, col, matrix) {
  matrix[row][col] = "0";

  if (matrix[row][col - 1] === "1") {
    dfsHelper(row, col - 1, matrix);
  }

  if (matrix[row][col + 1] === "1") {
    dfsHelper(row, col + 1, matrix);
  }

  if (matrix[row - 1] && matrix[row - 1][col] === "1") {
    dfsHelper(row - 1, col, matrix);
  }

  if (matrix[row + 1] && matrix[row + 1][col] === "1") {
    dfsHelper(row + 1, col, matrix);
  }
}
