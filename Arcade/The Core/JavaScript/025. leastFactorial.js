/*
  O(n) time | O(1) space - where n is the output
*/

function solution(n) {
  let cur = 1;
  let pointer = 1;

  while (cur < n) {
    pointer++;
    cur *= pointer;
  }

  return cur;
}
