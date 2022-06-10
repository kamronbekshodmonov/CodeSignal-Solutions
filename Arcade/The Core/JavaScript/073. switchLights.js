/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(a) {
  let isLitCandleObserved = false;

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === 1) isLitCandleObserved = !isLitCandleObserved;
    if (isLitCandleObserved) {
      a[i] = a[i] === 1 ? 0 : 1;
    }
  }

  return a;
}
