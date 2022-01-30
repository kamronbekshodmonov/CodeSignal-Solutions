/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(inputArray) {
  let max = -Infinity;
  for (let i = 1; i < inputArray.length; i++) {
    max = Math.max(max, inputArray[i - 1] * inputArray[i]);
  }

  return max;
}
