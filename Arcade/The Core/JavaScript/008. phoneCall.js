/*
  O(1) time | O(1) space
*/

function solution(min1, min2_10, min11, s) {
  let maxTime = 0;
  if (s < min1) return 0;
  s -= min1;
  maxTime++;

  if (min2_10 * 9 > s) {
    maxTime += Math.floor(s / min2_10);
  } else {
    maxTime += 9;
    s -= min2_10 * 9;
    maxTime += Math.floor(s / min11);
  }

  return maxTime;
}
