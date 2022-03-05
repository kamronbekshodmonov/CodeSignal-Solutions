/*
  O(1) time | O(1) space
*/

function solution(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}
