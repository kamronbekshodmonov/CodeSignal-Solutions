/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(boundaries, y) {
  boundaries.unshift(-Infinity);
  var l = 0,
    r = boundaries.length - 1;
  while (l + 1 < r) {
    var mid = Math.floor((l + r) / 2);
    if ((boundaries[mid] + boundaries[mid + 1]) / 2 < y) {
      l = mid;
    } else {
      r = mid;
    }
  }
  return l;
}
