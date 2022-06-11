/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(maxLength, text) {
  let res = 0;
  let wordLength = 0;

  for (const char of text) {
    const charCode = char.charCodeAt(0);

    if (char === " ") {
      if (wordLength <= maxLength) res++;
      wordLength = 0;
    } else if (
      ("a".charCodeAt(0) <= charCode && charCode <= "z".charCodeAt(0)) ||
      ("A".charCodeAt(0) <= charCode && charCode <= "Z".charCodeAt(0))
    ) {
      wordLength++;
    }
  }

  if (0 < wordLength && wordLength <= maxLength) res++;
  return res;
}
