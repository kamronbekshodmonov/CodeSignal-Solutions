/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(a) {
  let stack = [];
  const result = new Array(a.length).fill(-1);

  for (let i = a.length - 1; i >= 0; i--) {
    while (a[stack[stack.length - 1]] <= a[i]) {
      stack.pop();
    }

    if (stack.length) result[i] = stack[stack.length - 1];
    stack.push(i);
  }

  stack = [];

  for (let i = 0; i < a.length; i++) {
    while (a[stack[stack.length - 1]] <= a[i]) {
      stack.pop();
    }

    if (stack.length) {
      const isLeftOptionCloser = result[i] - i >= i - stack[stack.length - 1];

      if (result[i] === -1 || (isLeftOptionCloser && result[i] !== -1)) {
        result[i] = stack[stack.length - 1];
      }
    }

    stack.push(i);
  }

  return result;
}
