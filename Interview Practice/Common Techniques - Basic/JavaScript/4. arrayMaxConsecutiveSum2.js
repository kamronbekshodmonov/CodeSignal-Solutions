/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(inputArray) {
  let max = inputArray[0];
  let curMax = inputArray[0];

  for (let i = 1; i < inputArray.length; i++) {
    curMax = Math.max(inputArray[i], inputArray[i] + curMax);
    max = Math.max(max, curMax);
  }

  return max;
}
