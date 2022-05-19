/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(noun) {
  const res = [];
  for (let i = 0; i < noun.length; i++) {
    res.push(i === 0 ? noun[i].toUpperCase() : noun[i].toLowerCase());
  }

  return res.join("");
}
