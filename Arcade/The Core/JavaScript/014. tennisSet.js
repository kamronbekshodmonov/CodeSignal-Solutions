/*
  O(1) time | O(1) space
*/

function solution(score1, score2) {
  const maxAbs = Math.abs(score1 - score2);
  const maxScore = Math.max(score1, score2);
  if (maxScore === 6) return maxAbs > 1;
  if (maxScore === 7) return maxAbs === 1 || maxAbs === 2;
  return false;
}
