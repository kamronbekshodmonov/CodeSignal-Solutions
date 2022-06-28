/*
  O(nlog(n)) time | O(n) space - where n is the length of the input array
*/

function solution(inputArray) {
  let isSum = true;
  let curArray = [];

  while (inputArray.length > 1) {
    let pointer = 0;

    while (pointer < inputArray.length) {
      if (isSum) {
        curArray.push(inputArray[pointer] + inputArray[pointer + 1]);
      } else {
        curArray.push(inputArray[pointer] * inputArray[pointer + 1]);
      }

      pointer += 2;
    }

    isSum = !isSum;
    inputArray = curArray;
    curArray = [];
  }

  return inputArray[0];
}
