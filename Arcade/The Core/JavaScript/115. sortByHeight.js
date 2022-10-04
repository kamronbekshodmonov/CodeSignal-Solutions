/*
  O(n^2) time | O(1) space - where n is the length of the input array
*/

function solution(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) continue;
    let minValueIndex = i;

    for (let j = i + 1; j < a.length; j++) {
      if (a[j] === -1) continue;
      if (a[j] < a[minValueIndex]) minValueIndex = j;
    }

    swap(i, minValueIndex, a);
  }

  return a;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
