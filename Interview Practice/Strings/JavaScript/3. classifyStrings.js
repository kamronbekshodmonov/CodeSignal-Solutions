/*
  O(n) time | O(n) space - where n is the length of the input s string
*/

function solution(s) {
  if (s.match(/[aeiou]{3}/)) return "bad";
  if (s.match(/[^aeiou?]{5}/)) return "bad";

  if (s.match(/\?/)) {
    const a = solution(s.replace(/\?/, "a"));
    const b = solution(s.replace(/\?/, "b"));

    if (a === b) return a;
    return "mixed";
  }

  return "good";
}
