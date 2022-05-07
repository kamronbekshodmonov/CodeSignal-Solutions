/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(inputArray, l, r) {
  const res = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (l <= i && i <= r) continue;
    res.push(inputArray[i]);
  }

  return res;
}
