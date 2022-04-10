/*
  O(1) time | O(1) space
*/

function solution(a) {
  const binaryNum = a.map((el) => convertToBinary(el));
  let res = 0;
  let pow = 0;

  for (let binary of binaryNum) {
    let max = 8;
    while (binary > 0) {
      if (binary % 10 === 1) {
        res += Math.pow(2, pow);
      }
      binary = (binary - (binary % 10)) / 10;
      pow++;
      max--;
    }

    pow += max;
  }

  return res;
}

function convertToBinary(num) {
  let res = 0;
  let multiplyTo = 1;

  while (num > 0) {
    if (num % 2 === 1) {
      res += multiplyTo;
    }

    multiplyTo *= 10;
    num = Math.floor(num / 2);
  }

  return res;
}
