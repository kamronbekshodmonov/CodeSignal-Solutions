/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(a, b) {
  const aArr = [];
  const bArr = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (aArr.length === 2) return false;
      aArr.push(a[i]);
      bArr.push(b[i]);
    }
  }

  if (aArr.length) {
    if (aArr.length === 1) return false;
    return aArr[0] === bArr[1] && aArr[1] === bArr[0];
  }

  return true;
}
