/*
  O(n) time | O(1) space - where n is the r minus l
*/

function solution(n, l, r) {
  let res = 0;
  while (l <= r) {
    if (l + r > n) {
      r--;
    } else if (l + r < n) {
      l++;
    } else {
      res++;
      l++;
      r--;
    }
  }

  return res;
}
