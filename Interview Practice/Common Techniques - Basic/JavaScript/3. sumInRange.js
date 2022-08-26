/*
  O(n + m) time | O(n) space - where n is the length of the nums array and m is the length of the queries array
*/

function solution(nums, queries) {
  let result = 0;
  let sums = getSums(nums);
  let pow = Math.pow(10, 9) + 7;

  queries.forEach(([start, end]) => {
    result += sums[end] - (sums[start - 1] || 0);
  });

  return result < 0 ? ((result % pow) + pow) % pow : result % pow;
}

function getSums(nums) {
  let sum = 0;
  let sums = [];

  nums.forEach((num) => {
    sum += num;
    sums.push(sum);
  });

  return sums;
}
