/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(inputString) {
  const seenChars = {};
  for (const char of inputString) {
    char in seenChars ? seenChars[char]++ : (seenChars[char] = 1);
  }

  let oddsAllowed = 1;
  for (let key in seenChars) {
    if (seenChars[key] % 2 === 1) {
      if (oddsAllowed === 0) return false;
      oddsAllowed--;
    }
  }

  return true;
}
