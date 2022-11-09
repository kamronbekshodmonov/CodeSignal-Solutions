/*
  O(n * m) time | O(m) space - where n is the length of the first input string and m is the length of the second input string
*/

function solution(t, s) {
  var pattern = "";
  for (var i = 0; i < s.length; i++) {
    pattern += `[+${s[i]}+]+.*`;
  }
  var re = new RegExp(pattern);
  return re.test(t);
}
