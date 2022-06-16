/*
  O(n^2) time | O(n) space - where n is the length of the input array
*/

function solution(a) {
  let res = 0;
  const sums = getSums(a);

  for (let i = 0; i < a.length - 2; i++) {
    for (let j = i + 1; j < a.length - 1; j++) {
      let first = sums[i];
      let second = sums[j] - sums[i];
      let third = sums[sums.length - 1] - sums[j];

      if (first === second && second === third) {
        res++;
      }
    }
  }

  return res;
}

function getSums(array) {
  const res = new Array(array.length).fill(0);
  res[0] = array[0];

  for (let i = 1; i < array.length; i++) {
    res[i] = res[i - 1] + array[i];
  }

  return res;
}
