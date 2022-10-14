/*
  O(1) time | O(1) space
*/

function solution(cell) {
  const positions = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
  ];

  let result = 0;
  const a_char_code = "a".charCodeAt();
  const h_char_code = "h".charCodeAt();
  const cell_char_code = cell[0].charCodeAt();

  for (const [row, col] of positions) {
    const row_position = cell_char_code + row;
    const col_position = Number(cell[1]) + col;

    const is_row_valid =
      a_char_code <= row_position && row_position <= h_char_code;
    const is_col_valid = 1 <= col_position && col_position <= 8;

    if (is_row_valid && is_col_valid) result++;
  }

  return result;
}
