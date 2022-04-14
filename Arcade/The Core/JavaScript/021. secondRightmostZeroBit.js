/*
  O(1) time | O(1) space
*/

function solution(n) {
  return ~(n |= -~n) & -~n;
}
