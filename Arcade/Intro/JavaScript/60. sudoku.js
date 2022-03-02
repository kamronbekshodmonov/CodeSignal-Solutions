/*
  O(n) time | O(n) space - where n is the total number of elements in the array
*/

function solution(grid) {
  let rawNums = new Array(9).fill(0).map(() => {
    return {};
  });
  let colNums = new Array(9).fill(0).map(() => {
    return {};
  });
  let gridNums = new Array(9).fill(0).map(() => {
    return {};
  });

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const curNum = grid[row][col];
      let gridPosition = Math.floor(row / 3) + Math.floor(col / 3) * 3;

      if (curNum in rawNums[row]) return false;
      if (curNum in colNums[col]) return false;
      if (curNum in gridNums[gridPosition]) return false;

      rawNums[row][curNum] = true;
      colNums[col][curNum] = true;
      gridNums[gridPosition][curNum] = true;
    }
  }

  return true;
}
