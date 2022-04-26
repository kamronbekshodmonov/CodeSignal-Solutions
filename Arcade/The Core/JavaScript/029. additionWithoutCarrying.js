/*
  O(log(max(n, m))) time | O(1) space - where n is the param1 and m is the param2 and logarithm with base 10
*/

function solution(param1, param2) {
  let sum = 0;
  let multiply = 1;

  while (param1 > 0 || param2 > 0) {
    const firstVal = param1 > 0 ? param1 % 10 : 0;
    const secondVal = param2 > 0 ? param2 % 10 : 0;
    sum += ((firstVal + secondVal) % 10) * multiply;
    multiply *= 10;
    param1 = (param1 - (param1 % 10)) / 10;
    param2 = (param2 - (param2 % 10)) / 10;
  }

  return sum;
}
