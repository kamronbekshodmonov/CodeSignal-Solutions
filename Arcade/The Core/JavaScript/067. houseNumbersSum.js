/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(inputArray) {
  let res = 0;

  for (const houseNumber of inputArray) {
    if (houseNumber === 0) return res;
    res += houseNumber;
  }
  return res;
}
