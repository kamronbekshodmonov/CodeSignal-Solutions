/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(s) {
  let same = 1;
  let prevLetter = s[0];
  const res = [];

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== prevLetter) {
      same !== 1 ? res.push(same + prevLetter) : res.push(prevLetter);
      prevLetter = s[i];
      same = 1;
    } else {
      same++;
    }
  }

  same !== 1 ? res.push(same + prevLetter) : res.push(prevLetter);
  return res.join("");
}
