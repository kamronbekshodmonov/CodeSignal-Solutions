/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(arr) {
  if (arr.length % 2 === 1) return arr;
  const middleIndex = arr.length / 2;
  const middleValue = arr[middleIndex] + arr[middleIndex - 1];
  arr.splice(middleIndex - 1, 2, middleValue);
  return arr;
}
