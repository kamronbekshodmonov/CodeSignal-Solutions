/*
  O(n) time | O(1) space - where n is the number of digits of the input
*/

function solution(n) {
  let sum = 0;
  let digitDegree = 0;
  while (n > 9) {
    while (n > 0) {
      sum += n % 10;
      n = (n - (n % 10)) / 10;
    }
    n = sum;
    sum = 0;
    digitDegree++;
  }

  return digitDegree;
}
