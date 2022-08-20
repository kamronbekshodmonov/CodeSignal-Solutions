/*
  O(n^2) time | O(n) space - where n is the length of the input string
*/

function solution(s) {
  let length = 1;

  while (s.slice(0, length).repeat(s.length).slice(0, s.length) !== s) {
    length++;
  }
  return length;
}
