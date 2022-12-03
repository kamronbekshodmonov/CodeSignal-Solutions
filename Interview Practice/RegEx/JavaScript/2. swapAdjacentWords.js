/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(s) {
  return s.replace(/(\w+) (\w+)/g, "$2 $1");
}
