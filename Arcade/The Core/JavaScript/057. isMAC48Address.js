/*
  O(1) time | O(1) space
*/

function solution(inputString) {
  if (inputString.length !== 17) return false;

  const validChars = {
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

  let pointer = 0;
  while (pointer < 17) {
    if (!validChars.hasOwnProperty(inputString[pointer])) return false;
    if (!validChars.hasOwnProperty(inputString[pointer + 1])) return false;
    if (pointer !== 15 && inputString[pointer + 2] !== "-") return false;
    pointer += 3;
  }

  return true;
}
