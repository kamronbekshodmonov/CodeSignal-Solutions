/*
  O(n) time | O(1) space - where n is the output
*/

function solution(deposit, rate, threshold) {
  let year = 0;

  while (deposit < threshold) {
    deposit += (deposit / 100) * rate;
    year++;
  }
  return year;
}
