/*
  O(nlog(n) + mlog(m)) time | O(n + m) space - where n is the length of the first input array and m is the length of the second input array
*/

function solution(a, q) {
  a.sort((a, b) => b - a);
  const [startQuery, endQuery] = getStartAndEndQueries(q);
  const maxRepeatedIndices = getMaxRepeatedIndices(startQuery, endQuery);
  const rearrangedRange = getRearrangedRange(maxRepeatedIndices, a);
  const sums = getSums(rearrangedRange);
  return getMaximumSum(sums, q);
}

function getStartAndEndQueries(query) {
  const startQuery = [];
  const endQuery = [];

  for (const [start, end] of query) {
    startQuery.push(start);
    endQuery.push(end);
  }

  startQuery.sort((a, b) => b - a);
  endQuery.sort((a, b) => b - a);

  return [startQuery, endQuery];
}

function getMaxRepeatedIndices(startQuery, endQuery) {
  let sum = 0;
  const range = new Array(10).fill(0);

  for (let i = 0; i < 10; i++) {
    while (startQuery.length && startQuery[startQuery.length - 1] === i) {
      sum++;
      startQuery.pop();
    }

    range[i] = [sum, i];

    while (endQuery.length && endQuery[endQuery.length - 1] === i) {
      sum--;
      endQuery.pop();
    }
  }

  range.sort((a, b) => b[0] - a[0]);
  return range;
}

function getRearrangedRange(range, array) {
  const rearrangedRange = [];
  for (let i = 0; i < array.length; i++) {
    rearrangedRange[range[i][1]] = array[i];
  }

  return rearrangedRange;
}

function getSums(rearrangedRange) {
  let sum = 0;
  const sums = new Array(rearrangedRange.length).fill(0);

  for (let i = 0; i < rearrangedRange.length; i++) {
    sum += rearrangedRange[i];
    sums[i] = sum;
  }

  return sums;
}

function getMaximumSum(sums, query) {
  let maximumSum = 0;
  for (const [start, end] of query) {
    console.log(sums[end], sums[start]);
    maximumSum += sums[end] - (sums[start - 1] || 0);
  }

  return maximumSum;
}
