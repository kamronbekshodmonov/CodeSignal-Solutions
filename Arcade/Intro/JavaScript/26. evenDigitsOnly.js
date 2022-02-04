/*
  O(log(n)) time | O(1) space - where n is the input and logarithm with base 10
*/

function solution(n) {
  while (n > 0) {
    const lastDigit = n % 10;
    if (lastDigit % 2 !== 0) return false;
    n = (n - lastDigit) / 10;
  }

  return true;
}
