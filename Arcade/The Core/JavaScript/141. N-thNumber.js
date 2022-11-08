/*
  O(m) time | O(n) space - where n is the input n and m is the length of the input string
*/

function solution(s, n) {
  var re = new RegExp(`(?:0*(\\d+)\\D*){${n}}`);
  return re.exec(s)[1];
}
