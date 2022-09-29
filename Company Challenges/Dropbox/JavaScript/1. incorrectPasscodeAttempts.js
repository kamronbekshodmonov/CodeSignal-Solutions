/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(passcode, attempts) {
  let attemptAmount = 0;

  for (const attempt of attempts) {
    passcode === attempt ? (attemptAmount = 0) : attemptAmount++;
    if (attemptAmount === 10) return true;
  }

  return false;
}
