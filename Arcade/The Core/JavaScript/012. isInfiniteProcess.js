/*
  O(1) time | O(1) space
*/

function solution(a, b) {
  if (a > b) return true;
  return a % 2 !== b % 2;
}
