/*
  O(n * m) time | O(1) space - where n is the length of the input array and m is the output
*/

function solution(inputArray) {
  let mod = 2;
  while (true) {
    let isBroken = false;
    for (const num of inputArray) {
      if (num % mod === 0) {
        mod++;
        isBroken = true;
        break;
      }
    }
    if (!isBroken) return mod;
  }
}
