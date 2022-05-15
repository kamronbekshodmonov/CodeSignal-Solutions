/*
  O(n^2log(r)) time | O(1) space - where n is the r minus l and logarithm with base 10
*/

function solution(l, r) {
  let res = 0;

  for (let i = l; i <= r; i++) {
    for (let j = i + 1; j <= r; j++) {
      const sum_j = getNumSum(j);
      const sum_i = getNumSum(i);
      if (i + sum_i >= j && j - sum_j <= i) res++;
    }
  }

  return res;
}

function getNumSum(num) {
  let res = 0;

  while (num > 0) {
    res += num % 10;
    num = (num - (num % 10)) / 10;
  }
  return res;
}
