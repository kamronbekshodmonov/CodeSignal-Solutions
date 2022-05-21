/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(inputString) {
  if (inputString.length % 2 !== 0) return false;

  let leftIndex = 0;
  let rightIndex = inputString.length / 2;

  while (rightIndex < inputString.length) {
    if (inputString[leftIndex] !== inputString[rightIndex]) return false;
    leftIndex++;
    rightIndex++;
  }

  return true;
}
