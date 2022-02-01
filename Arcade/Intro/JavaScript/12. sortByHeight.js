/*
  O(n^2) time | O(1) space - where n is the length of the input array
*/

function solution(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) continue;
    let smallestIdx = i;

    for (let j = i + 1; j < a.length; j++) {
      if (a[j] === -1) continue;
      if (a[smallestIdx] > a[j]) smallestIdx = j;
    }

    if (i !== smallestIdx) {
      const temp = a[i];
      a[i] = a[smallestIdx];
      a[smallestIdx] = temp;
    }
  }

  return a;
}
