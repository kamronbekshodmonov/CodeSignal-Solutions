/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(inputArray) {
  const res = [];
  let longestStringLength = 0;

  inputArray.forEach((str) => {
    longestStringLength = Math.max(str.length, longestStringLength);
  });

  inputArray.forEach((str) => {
    if (str.length === longestStringLength) {
      res.push(str);
    }
  });

  return res;
}
