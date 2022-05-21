/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(inputString) {
  let leftIndex = 0;
  let rightIndex = inputString.length - 1;

  while (leftIndex <= rightIndex) {
    const leftChar = inputString[leftIndex].toLowerCase();
    const rightChar = inputString[rightIndex].toLowerCase();

    if (leftChar !== rightChar) return false;

    leftIndex++;
    rightIndex--;
  }

  return true;
}
