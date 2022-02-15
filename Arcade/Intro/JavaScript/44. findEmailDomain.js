/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(address) {
  const splittedArr = address.split("@");
  return splittedArr[splittedArr.length - 1];
}
