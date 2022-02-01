/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(inputArray) {
  let res = -Infinity;

  for (let i = 1; i < inputArray.length; i++) {
    res = Math.max(res, Math.abs(inputArray[i] - inputArray[i - 1]));
  }
  return res;
}
