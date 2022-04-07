/*
  O(n) time | O(n) space - where n is the length of the input s string
*/

function solution(s, x) {
  if (s.length < x.length) return -1;
  if (s.length === x.length) return s === x ? 0 : -1;

  let s_char_code_sum = 0;
  let x_char_code_sum = 0;

  for (let i = 0; i < x.length; i++) {
    s_char_code_sum += s.charCodeAt(i);
    x_char_code_sum += x.charCodeAt(i);
  }

  if (s_char_code_sum == x_char_code_sum && s.substr(0, x.length) === x)
    return 0;

  for (let i = 1; i <= s.length - x.length; i++) {
    s_char_code_sum -= s.charCodeAt(i - 1);
    s_char_code_sum += s.charCodeAt(i + x.length - 1);
    if (s_char_code_sum == x_char_code_sum && s.substr(i, x.length) === x)
      return i;
  }

  return -1;
}
