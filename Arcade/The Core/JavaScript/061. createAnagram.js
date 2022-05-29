/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(s, t) {
  const char_s = {};
  for (const char of s) {
    if (!char_s.hasOwnProperty(char)) char_s[char] = 0;
    char_s[char]++;
  }

  let res = 0;
  for (const char of t) {
    if (char_s[char] > 0) {
      char_s[char]--;
      continue;
    }

    res++;
  }

  return res;
}
