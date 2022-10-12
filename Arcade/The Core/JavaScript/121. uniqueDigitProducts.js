/*
  O(n * k) time | O(m) space - where n is the length of the input array, k is the max number of digits of elements in the input array and m is the total number of unique digit products
*/

function solution(a) {
  let uniqueAmount = 0;
  const uniqueDigitProducts = {};

  for (const num of a) {
    const multipliedNumDigits = getMultipliedNumDigits(num);
    if (!uniqueDigitProducts.hasOwnProperty(multipliedNumDigits)) {
      uniqueAmount++;
      uniqueDigitProducts[multipliedNumDigits] = true;
    }
  }

  return uniqueAmount;
}

function getMultipliedNumDigits(num) {
  if (num === 0) return 0;
  let multipliedNumDigits = 1;

  while (num > 0) {
    const lastDigit = num % 10;
    multipliedNumDigits *= lastDigit;
    num = (num - (num % 10)) / 10;
  }

  return multipliedNumDigits;
}
