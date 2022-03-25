/*
  O(n) time | O(n) space - where n is the length of the nums array
*/

function solution(nums, k) {
  const seenNums = {};

  for (let i = 0; i < nums.length; i++) {
    if (seenNums.hasOwnProperty(nums[i])) {
      if (Math.abs(seenNums[nums[i]] - i) <= k) return true;
    }

    seenNums[nums[i]] = i;
  }

  return false;
}
