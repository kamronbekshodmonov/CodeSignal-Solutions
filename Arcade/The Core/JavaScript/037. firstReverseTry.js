/*
  O(1) time | O(1) space
*/

function solution(arr) {
  if (arr.length < 2) return arr;
  const firstElement = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = firstElement;
  return arr;
}
