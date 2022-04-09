/*
  O(1) time | O(1) space
*/

function solution(n, k) {
  return n & ~(1 << (k - 1));
}
