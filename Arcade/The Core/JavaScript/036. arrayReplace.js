/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(inputArray, elemToReplace, substitutionElem) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  }

  return inputArray;
}
