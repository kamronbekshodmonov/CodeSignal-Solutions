/*
  O(1) time | O(1) space
*/

function solution(symbol) {
  return !isNaN(Number(symbol)) && symbol !== " ";
}
