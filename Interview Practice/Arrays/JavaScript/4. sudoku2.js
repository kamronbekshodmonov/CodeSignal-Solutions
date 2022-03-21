/*
  O(n) time | O(n) space - where n is the total number of elements in the array
*/

function solution(grid) {
  const rowGrid = new Array(9).fill({}).map(() => {
    return {};
  });
  const colGrid = new Array(9).fill({}).map(() => {
    return {};
  });
  const squareGrid = new Array(9).fill({}).map(() => {
    return {};
  });

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const char = grid[row][col];
      if (char === ".") continue;
      const matrixLocation = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (rowGrid[row].hasOwnProperty(char)) return false;
      if (colGrid[col].hasOwnProperty(char)) return false;
      if (squareGrid[matrixLocation].hasOwnProperty(char)) return false;

      rowGrid[row][char] = true;
      colGrid[col][char] = true;
      squareGrid[matrixLocation][char] = true;
    }
  }

  return true;
}
