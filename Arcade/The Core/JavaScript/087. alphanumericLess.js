/*
  O(n + m) time | O(n + m) space - where n is the length of the first input string and m is the length of the second input string
*/

function solution(s1, s2) {
  const token1 = s1.replace(/\d+/g, (a) => a.padStart(20, 0));
  const token2 = s2.replace(/\d+/g, (a) => a.padStart(20, 0));

  if (token1 < token2) return true;
  if (token1 > token2) return false;

  return s1.padEnd(20, "a") < s2.padEnd(20, "a");
}
