/*
  O(n + m) time | O(1) space - where n is the endCol minus startCol and m is the endRow minus startRow
*/

function solution(canvas, rectangle) {
  const startRow = rectangle[1];
  const startCol = rectangle[0];
  const endCol = rectangle[2];
  const endRow = rectangle[3];

  canvas[startRow][startCol] = "*";
  canvas[startRow][endCol] = "*";
  canvas[endRow][startCol] = "*";
  canvas[endRow][endCol] = "*";

  for (let col = startCol + 1; col < endCol; col++) {
    canvas[startRow][col] = "-";
    canvas[endRow][col] = "-";
  }

  for (let row = startRow + 1; row < endRow; row++) {
    canvas[row][startCol] = "|";
    canvas[row][endCol] = "|";
  }

  return canvas;
}
