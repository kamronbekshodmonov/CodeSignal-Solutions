/*
  O(1) time | O(1) space
*/

function solution(bishop, pawn) {
  if (bishop[0] === pawn[0] || pawn[1] === bishop[1]) return false;
  const bishopLoc = [bishop[0].charCodeAt(), bishop[1]];

  while (
    pawn[1] > bishop[1] ? pawn[1] > bishopLoc[1] : pawn[1] < bishopLoc[1]
  ) {
    pawn[0] > bishop[0] ? bishopLoc[0]++ : bishopLoc[0]--;
    pawn[1] > bishop[1] ? bishopLoc[1]++ : bishopLoc[1]--;
  }

  return pawn === `${String.fromCharCode(bishopLoc[0])}${bishopLoc[1]}`;
}
