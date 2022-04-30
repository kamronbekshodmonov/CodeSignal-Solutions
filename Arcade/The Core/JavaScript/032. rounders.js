/*
  O(log(n)) time | O(1) space - where n is the input and logarithm with base 10
*/

function solution(n) {
  let remainder = 0;
  let multiplyTo = 1;

  while (n > 9) {
    const curRemainder = (n % 10) + remainder;
    curRemainder >= 5 ? (remainder = 1) : (remainder = 0);
    multiplyTo *= 10;
    n = (n - (n % 10)) / 10;
  }

  return (n + remainder) * multiplyTo;
}
