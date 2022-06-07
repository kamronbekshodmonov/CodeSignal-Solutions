/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(s) {
  let prevCharCode = -1;

  for (const char of s) {
    if (prevCharCode >= char.charCodeAt()) return false;
    prevCharCode = char.charCodeAt();
  }

  return true;
}
