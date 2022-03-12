/*
  O(1) time | O(1) space
*/

function solution(a, b, c) {
  if (a === b) return c;
  if (a === c) return b;
  return a;
}
