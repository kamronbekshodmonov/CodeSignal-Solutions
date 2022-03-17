/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(s) {
  const seenCharacters = {};
  for (const char of s) {
    char in seenCharacters
      ? seenCharacters[char]++
      : (seenCharacters[char] = 1);
  }

  for (const key in seenCharacters) {
    if (seenCharacters[key] === 1) return key;
  }

  return "_";
}
