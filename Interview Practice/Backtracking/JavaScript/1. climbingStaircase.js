/*
  O(k^n) time | O(k^n) space - where n is the first input and k is the second input
*/

function solution(n, k) {
  if (k === 0) return [[]];
  return recursiveHelper(0, [], [], n, k);
}

function recursiveHelper(curStaircase, curSteps, ways, staircase, steps) {
  if (curStaircase === staircase) {
    ways.push([...curSteps]);
    return ways;
  }

  for (let i = 1; i <= Math.min(steps, staircase - curStaircase); i++) {
    curSteps.push(i);
    recursiveHelper(curStaircase + i, curSteps, ways, staircase, steps);
    curSteps.pop();
  }

  return ways;
}
