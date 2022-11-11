/*
  O(1) time | O(1) space
*/

function solution(pairOfLines) {
  var re = /(.{3})\t.*(.{3})$/;
  var match = re.exec(pairOfLines);
  return match[1] == match[2];
}
