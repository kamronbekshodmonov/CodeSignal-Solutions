/*
  O(max(n, w)) time | O(w) space - where n is the number of digits of the input number and w is the input width
*/

function solution(number, width) {
  const numberOfDigits = getNumberOfDigits(number);

  if (width === numberOfDigits) {
    return number.toString();
  } else if (width < numberOfDigits) {
    return cutLeadingDigits(number, width);
  } else {
    return addLeadingZeros(width - numberOfDigits, number);
  }
}

function getNumberOfDigits(number) {
  if (number === 0) return 1;
  let res = 0;

  while (number > 0) {
    res++;
    number = (number - (number % 10)) / 10;
  }
  return res;
}

function cutLeadingDigits(number, width) {
  let res = [];

  while (width > 0) {
    width--;
    res.push(number % 10);
    number = (number - (number % 10)) / 10;
  }

  return res.reverse().join("");
}

function addLeadingZeros(amount, number) {
  const leadingZeros = new Array(amount).fill(0);
  return `${leadingZeros.join("")}${number.toString()}`;
}
