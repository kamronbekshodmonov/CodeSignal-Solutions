/*
  O(nlog(m)) time | O(1) space - where n is the length of the sequence and m is the max number that was formed in the sequence and logarithm with base 10
*/

function solution(a0) {
  let res = 0;
  let seenNums = {};
  let prevValue = a0;

  while (true) {
    let sum = 0;
    while (a0 > 0) {
      sum += Math.pow(a0 % 10, 2);
      a0 = (a0 - (a0 % 10)) / 10;
    }

    res++;
    a0 = sum;
    if (prevValue === a0 || seenNums.hasOwnProperty(sum)) break;
    seenNums[sum] = true;
  }

  res++;
  return res;
}
