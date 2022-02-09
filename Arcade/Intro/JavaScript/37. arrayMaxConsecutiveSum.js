/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(inputArray, k) {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) sum += inputArray[i];
  maxSum = sum;

  for (let i = k; i < inputArray.length; i++) {
    sum = sum - inputArray[i - k] + inputArray[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}
