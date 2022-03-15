/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(a) {
  const seenNumbers = {};
  for (const num of a) {
    if (num in seenNumbers) return num;
    seenNumbers[num] = true;
  }

  return -1;
}
