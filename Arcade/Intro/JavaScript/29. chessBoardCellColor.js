/*
  O(1) time | O(1) space
*/

function solution(cell1, cell2) {
  let is_cell_1_white, is_cell_2_white;
  is_cell_1_white =
    "A".charCodeAt() % 2 === cell1[0].charCodeAt() % 2
      ? Number(cell1[1]) % 2 === 0
      : Number(cell1[1]) % 2 === 1;
  is_cell_2_white =
    "A".charCodeAt() % 2 === cell2[0].charCodeAt() % 2
      ? Number(cell2[1]) % 2 === 0
      : Number(cell2[1]) % 2 === 1;
  return is_cell_1_white === is_cell_2_white;
}
