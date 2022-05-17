/*
  O(1) time | O(1) space
*/

function solution(a, b) {
  const pointsA = Math.floor(Math.sqrt((a * a) / 2));
  const pointsB = Math.floor(Math.sqrt((b * b) / 2));
  return (pointsA * pointsB + Math.floor((pointsA + pointsB) / 2)) * 2 + 1;
}
