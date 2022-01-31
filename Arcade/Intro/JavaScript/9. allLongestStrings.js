/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(inputArray) {
  const res = [];
  let longestStringLength = 0;
  for (const str of inputArray) {
    longestStringLength = Math.max(longestStringLength, str.length);
  }

  for (const str of inputArray) {
    if (str.length === longestStringLength) {
      res.push(str);
    }
  }

  return res;
}
