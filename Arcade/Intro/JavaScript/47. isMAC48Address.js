/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(inputString) {
  const max48Address = inputString.split("-");
  const allowedChars = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    A: true,
    B: true,
    C: true,
    D: true,
    E: true,
    F: true,
  };

  for (const el of max48Address) {
    if (el.length !== 2) return false;
    if (!(el[0] in allowedChars) || !(el[1] in allowedChars)) return false;
  }

  return true;
}
