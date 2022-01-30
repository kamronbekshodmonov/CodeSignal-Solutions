/*
  O(n) time | O(1) space - where n is the input
*/

function solution(n) {
  if (n === 1) return 1;
  let res = 5;

  for (let i = 3; i <= n; i++) {
    res += (i - 1) * 4;
  }

  return res;
}
