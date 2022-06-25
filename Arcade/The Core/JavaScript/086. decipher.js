/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(cipher) {
  let sum = 0;
  const res = [];
  const char_code_z = "z".charCodeAt();

  for (const num of cipher) {
    const potential_char_code = sum * 10 + Number(num);

    if (potential_char_code <= char_code_z) {
      sum = potential_char_code;
    } else {
      res.push(String.fromCharCode(sum));
      sum = Number(num);
    }
  }

  res.push(String.fromCharCode(sum));
  return res.join("");
}
