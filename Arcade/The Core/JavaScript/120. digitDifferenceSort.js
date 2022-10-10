/*
  O(nlog(n) + n * k) time | O(m) space - where n is the length of the input array, k is the max number of digits of elements in the input array and m is the unique number of elements in the input array
*/

function solution(a) {
  const numsDifference = {};

  a.sort((n, m) => {
    if (!numsDifference.hasOwnProperty(n)) numsDifference[n] = getDifference(n);
    if (!numsDifference.hasOwnProperty(m)) numsDifference[m] = getDifference(m);
    nDifference = numsDifference[n];
    mDifference = numsDifference[m];
    if (nDifference === mDifference) return -1;
    return nDifference - mDifference;
  });

  return a;
}

function getDifference(num) {
  let max = -Infinity;
  let min = Infinity;

  while (num > 0) {
    const lastDigit = num % 10;
    num = (num - (num % 10)) / 10;
    max = Math.max(max, lastDigit);
    min = Math.min(min, lastDigit);
  }

  return max - min;
}
