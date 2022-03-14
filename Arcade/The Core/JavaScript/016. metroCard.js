/*
  O(1) time | O(1) space
*/

function solution(lastNumberOfDays) {
  if (lastNumberOfDays === 28 || lastNumberOfDays === 30) return [31];
  return [28, 30, 31];
}
