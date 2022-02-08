/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(s) {
  const seenChars = {};
  let uniqueChars = 0;

  for (const char of s) {
    if (!(char in seenChars)) {
      seenChars[char] = true;
      uniqueChars++;
    }
  }

  return uniqueChars;
}
