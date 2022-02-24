/*
  O(n + m) time | O(n) space - where n is the length of the s1 and m is the length of the s2 
*/

function solution(s1, s2) {
  const stringOneLetters = {};
  let commonCharacters = 0;
  for (let i = 0; i < s1.length; i++) {
    s1[i] in stringOneLetters
      ? (stringOneLetters[s1[i]] += 1)
      : (stringOneLetters[s1[i]] = 1);
  }

  for (let i = 0; i < s2.length; i++) {
    if (stringOneLetters[s2[i]] >= 1) {
      commonCharacters++;
      stringOneLetters[s2[i]]--;
    }
  }

  return commonCharacters;
}
