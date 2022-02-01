/*
  O(n) time | O(n) space - where n is the input
*/

function solution(n) {
  let stringNum = n.toString();
  let leftSum = 0,
    rightSum = 0;
  let leftPointer = 0,
    rightPointer = stringNum.length - 1;

  while (leftPointer < rightPointer) {
    leftSum += Number(stringNum[leftPointer]);
    rightSum += Number(stringNum[rightPointer]);
    leftPointer++;
    rightPointer--;
  }

  return leftSum === rightSum;
}
