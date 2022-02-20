/*
  O(log(n)) time | O(1) space - where n is the input and logarithm with base 10
*/

function solution(n) {
  let remainder = 0;
  let multiplyTo = 1;
  let maxNumber = -Infinity;

  while (n > 0) {
    let curNum = ((n - (n % 10)) / 10) * multiplyTo + remainder;
    maxNumber = Math.max(maxNumber, curNum);
    remainder += (n % 10) * multiplyTo;
    multiplyTo *= 10;
    n = (n - (n % 10)) / 10;
  }
  return maxNumber;
}
