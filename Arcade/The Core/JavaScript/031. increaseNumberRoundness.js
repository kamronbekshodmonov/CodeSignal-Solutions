/*
  O(log(n)) time | O(1) space - where n is the input and logarithm with base 10
*/

function solution(n) {
  while (n > 0) {
    while (n > 0 && n % 10 === 0) {
      n /= 10;
    }

    if (n <= 0) return false;

    while (n > 0 && n % 10 !== 0) {
      n = (n - (n % 10)) / 10;
    }

    if (n <= 0) return false;

    return true;
  }

  return false;
}
