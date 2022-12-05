/*
  O(n^2) time | O(n) space - where n is the length of the input string
*/

function solution(letter) {
  var pattern = /([a-zA-Z]+)[^a-zA-Z]+\1(?![a-zA-Z])/gi;
  var matches = letter.match(pattern);
  if (matches) {
    return matches.length;
  } else {
    return 0;
  }
}
