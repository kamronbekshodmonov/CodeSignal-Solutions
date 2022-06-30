/*
  O(n) time | O(1) space - where n is the input
*/

function solution(n) {
  let sum = 1;
  const waysToTop = [0, 1, 1];

  for (let i = 2; i <= n; i++) {
    sum -= waysToTop[0];
    sum += waysToTop[2];
    waysToTop[0] = waysToTop[1];
    waysToTop[1] = waysToTop[2];
    waysToTop[2] = sum;
  }

  return sum;
}
