/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(line) {
  if (line[0] === "_") return false;

  let numString = "";
  let hadHash = false;
  let finishedHash = false;
  let base = 10;

  for (let char of line) {
    char = char.toUpperCase();
    if (char !== "_") {
      if ((char >= "0" && char <= "9") || (char >= "A" && char <= "F")) {
        if (base !== undefined) {
          if (values[char] >= base) {
            return false;
          }
        }
        numString += char;
      } else if (char === "#") {
        if (!hadHash) {
          hadHash = true;
          if (isNaN(numString)) {
            return false;
          } else {
            const num = +numString;
            if (num >= 2 && num <= 16) {
              base = num;
              numString = "";
            } else {
              return false;
            }
          }
        } else {
          if (finishedHash) {
            return false;
          } else {
            if (numString === "") return false;
            finishedHash = true;
          }
        }
      }
    }
  }

  if (hadHash && !finishedHash) return false;
  return true;
}

const values = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
};
