/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(s) {
  const res = [];
  let pointer = 0;

  while (pointer < s.length) {
    let pointerTwo = pointer + 1;
    while (s[pointerTwo] && s[pointerTwo] === s[pointerTwo].toLowerCase()) {
      pointerTwo++;
    }
    res.push(s[pointer].toLowerCase() + s.substring(pointer + 1, pointerTwo));
    pointer = pointerTwo;
  }

  return res.join(" ");
}
