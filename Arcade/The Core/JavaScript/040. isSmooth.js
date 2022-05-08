/*
  O(1) time | O(1) space
*/

function solution(arr) {
  let middleNumber = arr[Math.floor(arr.length / 2)];
  if (arr.length % 2 === 0) {
    middleNumber = arr[arr.length / 2] + arr[arr.length / 2 - 1];
  }

  if (arr[0] !== middleNumber || middleNumber !== arr[arr.length - 1])
    return false;
  return true;
}
