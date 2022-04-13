/*
  O(log(n)) time | O(1) space - where n is the input
*/

function solution(a) {
  const reversedBinary = converyToReversedBinary(a);
  return convertToBase10(reversedBinary);
}

function converyToReversedBinary(num) {
  let res = 0;

  while (num > 0) {
    res *= 10;
    res += num % 2;
    num = Math.floor(num / 2);
  }

  return res;
}

function convertToBase10(binary) {
  let res = 0;
  let pow = 0;

  while (binary > 0) {
    if (binary % 2 === 1) res += Math.pow(2, pow);
    binary = (binary - (binary % 10)) / 10;
    pow++;
  }

  return res;
}
