/*
  O(1) time | O(1) space
*/

function solution(l, fares) {
  const options = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

  for (let i = fares.length - 1; i >= 0; i--) {
    if (fares[i] * l <= 20) return options[i];
  }
}
