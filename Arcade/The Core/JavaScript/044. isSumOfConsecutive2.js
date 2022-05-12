/*
  O(n^2) time | O(1) space - where n is the input
*/

function solution(n) {
  let res = 0;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    let sum = i;
    for (let j = i + 1; sum < n; j++) sum += j;
    if (sum === n) res++;
  }

  return res;
}
