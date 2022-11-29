/*
  O(nlog(n)) time | O(n) space - where n is the length of the input array
*/

function solution(names, time, netValue, isOnVacation) {
  const scores = [];

  for (let i = 0; i < names.length; i++) {
    if (!isOnVacation[i]) {
      const score = (netValue[i] * time[i]) / 365;
      scores.push([names[i], time[i], score]);
    }
  }

  scores.sort((a, b) => {
    if (a[2] !== b[2]) return b[2] - a[2];
    if (a[1] !== b[1]) return b[1] - a[1];
    return a[0] < b[0] ? -1 : 1;
  });

  return scores.map((score) => score[0]);
}
