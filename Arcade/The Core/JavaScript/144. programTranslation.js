/*
  O(n * m) time | O(n) space - where n is the length of the first input and m is the length of the second input
*/

function solution(code, args) {
  var argumentVariants = args.join("|");
  var re = new RegExp("(\\W)\\$?(" + argumentVariants + ")(?=\\W)", "g");
  var sub = "$1$$$2";
  return code.replace(re, sub);
}
