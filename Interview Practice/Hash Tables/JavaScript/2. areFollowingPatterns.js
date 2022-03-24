/*
  O(n) time | O(n + m) space - where n is the length of the strings array and m is the length of the patterns array
*/

function solution(strings, patterns) {
  const seenStrings = {};
  const seenPatterns = {};

  for (let i = 0; i < strings.length; i++) {
    const stringIdx = seenStrings[strings[i]];
    const patternIdx = seenPatterns[patterns[i]];
    if (stringIdx !== patternIdx) return false;

    seenStrings[strings[i]] = i;
    seenPatterns[patterns[i]] = i;
  }

  return true;
}
