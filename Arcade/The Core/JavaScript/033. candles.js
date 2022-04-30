/*
  O(n) time | O(1) space - where n is the candlesNumber divided by makeNew
*/

function solution(candlesNumber, makeNew) {
  let res = 0;
  let remaining = 0;

  while (candlesNumber > 0) {
    if (candlesNumber > 0) {
      res += candlesNumber;
      remaining += candlesNumber;
      candlesNumber = 0;
    }

    candlesNumber = Math.floor(remaining / makeNew);
    remaining -= candlesNumber * makeNew;
  }

  return res;
}
