/*
  O(1) time | O(1) space
*/

function solution(n, m) {
  return n + m + gcd(n, m) - 2;
}

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};
