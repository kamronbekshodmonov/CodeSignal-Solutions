/*
  O(n + m) time | O(min(n, m)) space - where n is the length of the first input array and m is the length of the second input array
*/

function solution(a, b, v) {
  let minLengthArray = a.length <= b.length ? a : b;
  let maxLengthArray = a.length <= b.length ? b : a;

  const values = new Map();
  minLengthArray.forEach((value) => values.set(value, true));

  for (const value of maxLengthArray) {
    const target = v - value;
    if (values.has(target)) return true;
  }

  return false;
}
