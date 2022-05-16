/*
  O(n^2) time | O(n) space - where n is the length of the input
*/

function solution(n) {
  const divisorsCount = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let divisors = 1;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) divisors++;
    }
    divisorsCount[i] = divisors;
  }

  const weaknessCount = new Array(n + 1).fill(0);

  for (let i = 1; i < divisorsCount.length; i++) {
    let weakness = 0;
    for (let j = 1; j < i; j++) {
      if (divisorsCount[j] > divisorsCount[i]) weakness++;
    }
    weaknessCount[i] = weakness;
  }

  const res = [0, 0];
  for (let i = 1; i < weaknessCount.length; i++) {
    const weakness = weaknessCount[i];
    if (weakness > res[0]) {
      res[0] = weakness;
      res[1] = 1;
    } else if (weakness === res[0]) {
      res[1]++;
    }
  }

  return res;
}
