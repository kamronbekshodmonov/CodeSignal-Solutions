/*
  O(n + m) time | O(1) space - where n is the length of the first input string and m is the length of the second input string
*/

function solution(a, b) {
  const char_a = {};
  const char_b = {};

  for (const char of a) {
    if (!char_a.hasOwnProperty(char)) char_a[char] = 0;
    char_a[char]++;
  }

  for (const char of b) {
    if (char_a.hasOwnProperty(char)) {
      if (!char_b.hasOwnProperty(char)) char_b[char] = 0;
      char_b[char]++;
    }
  }

  let res = Infinity;
  for (const key in char_a) {
    res = Math.min(res, Math.floor((char_b[key] || 0) / char_a[key]));
    if (res === 0) return 0;
  }

  return res === Infinity ? 0 : res;
}
