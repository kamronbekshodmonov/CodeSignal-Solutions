/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(sequence) {
  let removesAllowed = 1;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      if (removesAllowed === 0) return false;
      removesAllowed--;

      if (i + 1 < sequence.length) {
        if (
          (i - 2 < 0 || sequence[i] > sequence[i - 2]) &&
          sequence[i] < sequence[i + 1]
        )
          continue;
        if (sequence[i + 1] <= sequence[i - 1]) return false;
      }
    }
  }

  return true;
}
