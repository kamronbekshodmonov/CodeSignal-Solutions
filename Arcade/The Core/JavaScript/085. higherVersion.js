/*
  O(n + m) time | O(n + m) space - where n is the length of the first input string and m is the length of the second input string
*/

function solution(ver1, ver2) {
  const ver1Splitted = ver1.split(".");
  const ver2Splitted = ver2.split(".");
  const minLength = Math.min(ver1Splitted.length, ver2Splitted.length);
  const maxLength = Math.max(ver1Splitted.length, ver2Splitted.length);

  let pointer = 0;
  while (pointer < minLength) {
    const ver1Num = Number(ver1Splitted[pointer]);
    const ver2Num = Number(ver2Splitted[pointer]);
    if (ver1Num > ver2Num) return true;
    if (ver1Num < ver2Num) return false;
    pointer++;
  }

  const isLengthNotEqual = ver1Splitted.length !== ver2Splitted.length;
  const isVer1Longer = ver1Splitted.length > ver2Splitted.length;

  if (isLengthNotEqual && isVer1Longer) {
    while (pointer < maxLength) {
      if (Number(ver2Splitted[pointer]) > 0) return true;
      pointer++;
    }
  }

  return false;
}
