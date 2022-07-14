/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(message) {
  if (message === "0") return 0;
  if (message.length === 1) return 1;

  return recursiveHelper(message, 0, {});
}

function recursiveHelper(message, index, memoizedValue) {
  if (index === message.length) return 1;
  if (Number(message[index]) === 0) return 0;
  if (memoizedValue.hasOwnProperty(index)) return memoizedValue[index];

  let res = 0;
  res += recursiveHelper(message, index + 1, memoizedValue);

  const curAndNextSum =
    10 * Number(message[index]) + Number(message[index + 1]);

  if (curAndNextSum <= 26) {
    res += recursiveHelper(message, index + 2, memoizedValue);
  }

  memoizedValue[index] = res;
  return res % (Math.pow(10, 9) + 7);
}
