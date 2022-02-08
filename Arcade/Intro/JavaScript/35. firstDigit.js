/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(inputString) {
  let pointer = 0;

  while (pointer < inputString.length) {
    while (
      isNaN(Number(inputString[pointer])) ||
      inputString[pointer] === " "
    ) {
      pointer++;
    }

    return inputString[pointer];
  }
}
