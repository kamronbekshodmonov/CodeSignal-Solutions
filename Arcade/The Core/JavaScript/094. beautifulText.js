/*
  O(n^m + k) time | O(k) space - where n is the r minus l, m is the length of the input string split length and k is the length of the input string
*/

function solution(inputString, l, r) {
  let inputStringSplit = inputString.split(" ");

  firstLoop: for (i = l; i <= r; i++) {
    let length = 0;

    for (const strLength of inputStringSplit) {
      if (length !== 0) length++;

      length += strLength.length;

      if (i === length) length = 0;
      if (i < length) continue firstLoop;
    }

    if (length === 0) return true;
  }

  return false;
}
