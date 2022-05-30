/*
  O(n + k * m) time | O(n + m) space - where n is the length of the input string and k is the greatest square value which is smaller than or equal to n and m is the number of digits in k
*/

function solution(s) {
  let res = -1;
  let pointer = 1;
  let repeatedAmount = getRepeatedAmount(s);

  firstLoop: while (String(pointer * pointer).length <= s.length) {
    const square = String(pointer * pointer);
    pointer++;
    if (square.length !== s.length) continue;

    const curRepeatedAmount = getRepeatedAmount(square);

    for (const key in repeatedAmount) {
      if (repeatedAmount[key] !== curRepeatedAmount[key]) continue firstLoop;
    }

    res = (pointer - 1) * (pointer - 1);
  }

  return res;
}

function getRepeatedAmount(string) {
  let chars = {};
  let repeatedAmount = {};

  for (const char of string) {
    if (!chars.hasOwnProperty(char)) chars[char] = 0;
    chars[char]++;
  }

  for (const key in chars) {
    const amount = chars[key];
    if (!repeatedAmount.hasOwnProperty(amount)) repeatedAmount[amount] = 0;
    repeatedAmount[amount]++;
  }

  return repeatedAmount;
}
