/*
  O(nlog(n)) time | O(1) space - where n is the square root of n and logarithm with base pointer a
*/

function solution(n) {
  if (n === 1) return true;
  let a = 2;

  while (a <= Math.sqrt(n)) {
    for (let b = 2; Math.pow(a, b) <= n; b++) {
      if (Math.pow(a, b) === n) return true;
    }
    a++;
  }

  return false;
}
