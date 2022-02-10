/*
  O(n) time | O(1) space - where n is the output
*/

function solution(upSpeed, downSpeed, desiredHeight) {
  let day = 0;
  let height = 0;

  while (height < desiredHeight) {
    day++;
    height += upSpeed;
    if (height >= desiredHeight) return day;
    height -= downSpeed;
  }

  return day;
}
