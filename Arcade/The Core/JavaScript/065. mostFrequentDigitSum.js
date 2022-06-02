/*
  O(n * m) time | O(k) space - where n is the input, m is the number of digits of the input and m is the number of unique digit sums
*/

function solution(n) {
  let sum = n;
  let seenSums = {};

  while (sum > 0) {
    let temp = sum;
    let digitSum = 0;

    while (temp > 0) {
      digitSum += temp % 10;
      temp = (temp - (temp % 10)) / 10;
    }

    sum -= digitSum;

    if (!seenSums.hasOwnProperty(digitSum)) seenSums[digitSum] = 0;
    seenSums[digitSum]++;
  }

  let mostFrequentSum = [0, 0];

  for (const key in seenSums) {
    const isCurKeyGreater = seenSums[key] > mostFrequentSum[1];
    const isCurKeyEqualAndMax =
      seenSums[key] === mostFrequentSum[1] && Number(key) > mostFrequentSum[0];

    if (isCurKeyGreater || isCurKeyEqualAndMax) {
      mostFrequentSum[0] = Number(key);
      mostFrequentSum[1] = seenSums[key];
    }
  }

  return mostFrequentSum[0];
}
