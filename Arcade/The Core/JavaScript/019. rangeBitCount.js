/*
  O(nlog(b)) time | O(1) space - where n is the b minus a
*/

function solution(a, b) {
  let res = 0;
  for (let i = a; i <= b; i++) {
    res += convertToBinaryAndCountOnes(i);
  }

  return res;
}

function convertToBinaryAndCountOnes(num) {
  let res = 0;

  while (num > 0) {
    if (num % 2 === 1) res++;
    num = Math.floor(num / 2);
  }

  return res;
}
