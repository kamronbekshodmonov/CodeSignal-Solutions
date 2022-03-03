/*
  O(n) time | O(1) space - where n is the input
*/

function solution(n) {
  let res = 0;
  let multiplyTo = 1;

  for (let i = 1; i <= n; i++) {
    res += multiplyTo * 9;
    multiplyTo *= 10;
  }

  return res;
}
