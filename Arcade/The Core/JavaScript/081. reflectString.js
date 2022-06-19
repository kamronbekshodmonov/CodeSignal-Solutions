/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(inputString) {
  const res = [];

  for (const char of inputString) {
    res.push(reflectedAlphabet[char]);
  }

  return res.join("");
}

const reflectedAlphabet = {
  a: "z",
  b: "y",
  c: "x",
  d: "w",
  e: "v",
  f: "u",
  g: "t",
  h: "s",
  i: "r",
  j: "q",
  k: "p",
  l: "o",
  m: "n",
  n: "m",
  o: "l",
  p: "k",
  q: "j",
  r: "i",
  s: "h",
  t: "g",
  u: "f",
  v: "e",
  w: "d",
  x: "c",
  y: "b",
  z: "a",
};
