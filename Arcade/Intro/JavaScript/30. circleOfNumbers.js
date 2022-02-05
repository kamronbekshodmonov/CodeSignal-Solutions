/*
  O(1) time | O(1) space
*/

function solution(n, firstNumber) {
  const middle = n / 2;
  return (firstNumber + middle) % n;
}
