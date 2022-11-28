/*
  O(nlog(n)) time | O(n) space - where n is the length of the input array
*/

function solution(s, debts, interests) {
  const merged = [];
  for (let i = 0; i < debts.length; i++) {
    merged.push([debts[i], interests[i]]);
  }

  merged.sort((a, b) => b[1] - a[1]);

  let result = 0;
  let pointer = 0;
  let salary = s / 10;
  let month = 0;
  let isFirstTime = true;

  while (pointer < merged.length) {
    if (isFirstTime) {
      isFirstTime = false;
      merged[pointer][0] *= Math.pow(1 + merged[pointer][1] / 100, month);
    }

    const min = Math.min(merged[pointer][0], salary);
    result += min;
    salary -= min;
    merged[pointer][0] -= min;

    if (salary === 0) {
      month++;
      salary = s / 10;
      merged[pointer][0] += (merged[pointer][0] / 100) * merged[pointer][1];
    }

    if (merged[pointer][0] === 0) {
      pointer++;
      isFirstTime = true;
    }
  }

  return result;
}
