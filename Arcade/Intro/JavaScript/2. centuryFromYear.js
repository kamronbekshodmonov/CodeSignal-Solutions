/*
  O(1) time | O(1) space
*/

function solution(year) {
  const remainder = (year - (year % 100)) / 100;
  return year % 100 === 0 ? remainder : remainder + 1;
}
