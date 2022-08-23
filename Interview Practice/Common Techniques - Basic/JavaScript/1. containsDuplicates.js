/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(a) {
  return a.length !== new Set(a).size;
}
