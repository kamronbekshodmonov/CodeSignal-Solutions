/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(inputString) {
  const letters = new Array(26).fill(0);

  for (const letter of inputString) {
    const charCode = letter.charCodeAt() - "a".charCodeAt();
    letters[charCode]++;
  }

  for (let i = 1; i < letters.length; i++) {
    if (letters[i] > letters[i - 1]) return false;
  }

  return true;
}
