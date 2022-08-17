/*
  O(n + m) time | O(n + m) space - where n is the length of the first input string and m is the length of the second input string
*/

function solution(comb1, comb2) {
  let i = 0;
  let j = 0;
  let a = convertToBinary(comb1);
  let b = convertToBinary(comb2);

  while ((a << i) & b) i++;
  while ((b << j) & a) j++;

  return Math.min(
    Math.max(comb1.length + i, comb2.length),
    Math.max(comb2.length + j, comb1.length)
  );
}

function convertToBinary(comb) {
  return parseInt(
    comb.replace(/./g, (a) => (a == "*" ? 1 : 0)),
    2
  );
}
