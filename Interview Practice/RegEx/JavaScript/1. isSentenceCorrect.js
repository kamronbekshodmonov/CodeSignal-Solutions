/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(sentence) {
  var re = /^[A-Z][^.?!]*[.?!]$/;
  return re.test(sentence);
}
