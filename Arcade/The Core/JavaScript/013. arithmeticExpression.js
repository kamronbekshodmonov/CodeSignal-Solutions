/*
  O(1) time | O(1) space
*/

function solution(a, b, c) {
  if (a + b === c) return true;
  if (a - b === c) return true;
  if (a * b === c) return true;
  if (a / b === c) return true;
  return false;
}
