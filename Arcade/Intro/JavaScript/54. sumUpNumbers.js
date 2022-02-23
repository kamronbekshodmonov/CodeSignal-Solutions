/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(inputString) {
  let sum = 0;
  let pointer = 0;

  while (pointer < inputString.length) {
    let curSum = 0;
    while (
      pointer < inputString.length &&
      !isNaN(Number(inputString[pointer])) &&
      inputString[pointer] !== " "
    ) {
      curSum = curSum * 10 + Number(inputString[pointer]);
      pointer++;
    }
    pointer++;
    sum += curSum;
  }

  return sum;
}
