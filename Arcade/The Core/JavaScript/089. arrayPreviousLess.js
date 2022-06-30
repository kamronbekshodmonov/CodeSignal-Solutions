/*
  O(n^2) time | O(n) space - where n is the length of the input array
*/

function solution(items) {
  const res = [];

  firstLoop: for (let i = 0; i < items.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (items[j] < items[i]) {
        res.push(items[j]);
        continue firstLoop;
      }
    }

    res.push(-1);
  }

  return res;
}
