/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let row = 0; row < array1.length; row++) {
    if (array1[row].length !== array2[row].length) {
      return false;
    }
  }

  return true;
}
