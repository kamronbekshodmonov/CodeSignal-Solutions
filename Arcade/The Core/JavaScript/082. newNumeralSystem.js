/*
  O(1) time | O(1) space
*/

function solution(number) {
  let left = 0;
  let right = 25;

  const res = [];
  const charCodeA = "A".charCodeAt(0);
  const convertedNumber = number.charCodeAt(0) - charCodeA;

  while (left <= right) {
    if (left + right === convertedNumber) {
      const leftChar = String.fromCharCode(left + charCodeA);
      const rightChar = String.fromCharCode(right + charCodeA);
      res.push(`${leftChar} + ${rightChar}`);
      left++;
      right--;
    } else if (left + right < convertedNumber) {
      left++;
    } else {
      right--;
    }
  }

  return res;
}
