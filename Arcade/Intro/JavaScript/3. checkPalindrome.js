/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(inputString) {
  let leftIdx = 0;
  let rightIdx = inputString.length - 1;

  while (leftIdx <= rightIdx) {
    if (inputString[leftIdx] !== inputString[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }

  return true;
}
