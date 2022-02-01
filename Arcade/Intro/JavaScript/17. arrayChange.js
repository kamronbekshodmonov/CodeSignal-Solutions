/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(inputArray) {
  let res = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      res += 1 + inputArray[i - 1] - inputArray[i];
      inputArray[i] += 1 + inputArray[i - 1] - inputArray[i];
    }
  }

  return res;
}
