/*
  O(n^4 * m^4) time | O(n^4 * m^4) space - where n is the number of rows in the boardSize and m is the number of columns in the boardSize
*/

function solution(boardSize, initPosition, initDirection, k) {
  let pointer = 0;
  const points = new Map();

  while (pointer < k) {
    const point = getPositionPoint(initPosition, initDirection);

    if (points.has(point)) {
      k %= pointer;
      pointer = 0;
      break;
    }

    pointer++;
    points.set(point, true);
    getNextPosition(boardSize, initPosition, initDirection);
  }

  while (pointer < k) {
    pointer++;
    getNextPosition(boardSize, initPosition, initDirection);
  }

  return initPosition;
}

function getPositionPoint(initPosition, initDirection) {
  let point = 0;
  point += initPosition[0];
  point += initPosition[1] * 100;
  point += initDirection[0] * 10000;
  point += initDirection[1] * 1000000;
  return point;
}

function getNextPosition(boardSize, position, direction) {
  const nextRow = position[0] + direction[0];
  const nextCol = position[1] + direction[1];
  const isRowValid = 0 <= nextRow && nextRow < boardSize[0];
  const isColValid = 0 <= nextCol && nextCol < boardSize[1];
  isRowValid ? (position[0] = nextRow) : (direction[0] *= -1);
  isColValid ? (position[1] = nextCol) : (direction[1] *= -1);
}
