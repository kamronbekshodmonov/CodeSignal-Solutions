/*
  O(nlog(n)) time | O(1) space - where n is the length of the input array
*/

function solution(statues) {
  let statuesNeeded = 0;
  statues.sort((a, b) => a - b);
  for (let i = 1; i < statues.length; i++) {
    statuesNeeded += statues[i] - statues[i - 1] - 1;
  }

  return statuesNeeded;
}
