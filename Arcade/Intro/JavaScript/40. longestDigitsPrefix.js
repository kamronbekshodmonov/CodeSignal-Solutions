/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(inputString) {
  let longestPrefix = [];
  let pointer = 0;

  while (pointer < inputString.length) {
    while (
      pointer < inputString.length &&
      !isNaN(Number(inputString[pointer])) &&
      inputString[pointer] !== " "
    ) {
      longestPrefix.push(inputString[pointer]);
      pointer++;
    }
    return longestPrefix.join("");
  }
}
