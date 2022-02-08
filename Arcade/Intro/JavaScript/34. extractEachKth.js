/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(inputArray, k) {
  const res = [];
  for (let i = 0; i < inputArray.length; i++) {
    if ((i + 1) % k !== 0) res.push(inputArray[i]);
  }

  return res;
}
