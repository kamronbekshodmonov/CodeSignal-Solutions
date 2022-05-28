/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(string1, string2) {
  const swappedChars1 = {};
  const swappedChars2 = {};

  for (let i = 0; i < string1.length; i++) {
    const char1 = string1[i];
    const char2 = string2[i];

    if (swappedChars1.hasOwnProperty(char1) && swappedChars1[char1] !== char2) {
      return false;
    }

    if (swappedChars2.hasOwnProperty(char2) && swappedChars2[char2] !== char1) {
      return false;
    }

    swappedChars1[char1] = char2;
    swappedChars2[char2] = char1;
  }

  return true;
}
