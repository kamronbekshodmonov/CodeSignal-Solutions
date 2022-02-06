/*
  O(n^2) time | O(1) space - where n is the length of the input array
*/

function solution(a) {
  let closestAbs = Infinity;
  let closestValue = Infinity;

  for (let i = 0; i < a.length; i++) {
    let sum = 0;

    for (let j = 0; j < a.length; j++) {
      sum += Math.abs(a[j] - a[i]);
    }

    if (sum < closestAbs) {
      closestAbs = sum;
      closestValue = a[i];
    }
  }

  return closestValue;
}
