/*
  O(n + m) time | O(n) space - where n is the length of the first input string and m is the length of the second input string 
  We could technically improve space complexity by storing min length string, however, in the worst-case scenario we might still get the same length of strings
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
