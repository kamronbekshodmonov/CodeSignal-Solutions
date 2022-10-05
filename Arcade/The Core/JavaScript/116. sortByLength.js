/*
  O(n + mlog(m)) time | O(n + m) space - where n is the total number of elements in the input array and m is the unique number of string length in the input array
*/

function solution(inputArray) {
  const length = [];
  const values = {};

  for (const string of inputArray) {
    if (!values.hasOwnProperty(string.length)) {
      values[string.length] = [];
      length.push(string.length);
    }
    values[string.length].push(string);
  }

  length.sort((a, b) => a - b);

  const res = [];
  for (const curLength of length) {
    res.push(...values[curLength]);
  }

  return res;
}
