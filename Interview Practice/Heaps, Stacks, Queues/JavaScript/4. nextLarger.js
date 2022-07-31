/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(a) {
  const stack = [];
  const result = [];

  for (let i = a.length - 1; i >= 0; i--) {
    while (stack[stack.length - 1] <= a[i]) {
      stack.pop();
    }

    stack.length ? result.push(stack[stack.length - 1]) : result.push(-1);
    stack.push(a[i]);
  }

  return result.reverse();
}
