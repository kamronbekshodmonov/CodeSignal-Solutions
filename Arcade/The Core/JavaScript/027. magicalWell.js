/*
  O(n) time | O(1) space - where n is the input n
*/

function solution(a, b, n) {
  let res = 0;
  while (n > 0) {
    res += a * b;
    a++;
    b++;
    n--;
  }

  return res;
}
