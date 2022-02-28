/*
  O(n) time | O(log(n)) space - where n is the length of the input string and logarithm with base 8
*/

function solution(code) {
  const res = [];
  let pointer = code.length;

  while (pointer > 0) {
    const curByte = code.substring(pointer - 8, pointer);

    let sum = 0;
    let powerOfTwo = 1;
    for (let i = curByte.length - 1; i >= 0; i--) {
      if (Number(curByte[i]) === 1) {
        sum += powerOfTwo;
      }
      powerOfTwo *= 2;
    }

    res.push(String.fromCharCode(sum));
    pointer -= 8;
  }

  return res.reverse().join("");
}
