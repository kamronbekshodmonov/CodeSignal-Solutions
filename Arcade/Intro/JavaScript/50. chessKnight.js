/*
  O(1) time | O(1) space
*/

function solution(cell) {
  let validMoves = 0;
  const cellValue = Number(cell[1]);
  const cellCharCode = cell[0].charCodeAt();
  const directions = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  for (const dir of directions) {
    const curCharCode = dir[0] + cellCharCode;
    const curValue = dir[1] + cellValue;
    const is_between_1_and_8 = 1 <= curValue && curValue <= 8;
    const is_between_A_and_H =
      "a".charCodeAt() <= curCharCode && curCharCode <= "h".charCodeAt();
    if (is_between_1_and_8 && is_between_A_and_H) validMoves++;
  }

  return validMoves;
}
