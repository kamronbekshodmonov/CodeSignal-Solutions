/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(message) {
  let sum = 0;
  const res = [];
  const char_code_a = "a".charCodeAt();

  for (const char of message) {
    const cur_char_code = char.charCodeAt() - char_code_a;

    let decrypted_char_code = cur_char_code - sum;
    if (sum > cur_char_code) decrypted_char_code += 26;

    res.push(String.fromCharCode(decrypted_char_code + char_code_a));
    sum = cur_char_code;
  }

  return res.join("");
}
