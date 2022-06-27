/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(s) {
  const seenChars = {};

  for (const char of s) {
    if (!seenChars.hasOwnProperty(char)) seenChars[char] = 0;
    seenChars[char]++;
  }

  for (const key in seenChars) {
    if (seenChars[key] === 1) return key;
  }

  return "_";
}
