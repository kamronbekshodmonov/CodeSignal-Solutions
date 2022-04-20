/*
  O(1) time | O(1) space
*/

function solution(n, m) {
  return ~(n ^ m) & ((n ^ m) + 1);
}
