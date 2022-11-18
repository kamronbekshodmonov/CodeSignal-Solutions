/*
  O(n^2) time | O(1) space - where n is the length of the input array
*/

function solution(items) {
  const swap = (firstIndex, secondIndex) => {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  };

  const len = items.length;
  for (let i = 0; i < len; i++) {
    const stop = len - i;
    for (let j = 0; j < stop - 1; j++) {
      if (items[j] > items[j + 1]) {
        swap(j, j + 1);
      }
    }
  }

  return items;
}
