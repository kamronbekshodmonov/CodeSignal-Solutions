/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(nums) {
  let maxAmountMoney = 0;
  const maxSubset = [0, 0, 0];

  for (let i = nums.length - 1; i >= 0; i--) {
    maxAmountMoney = Math.max(
      maxAmountMoney,
      nums[i],
      nums[i] + maxSubset[1],
      nums[i] + maxSubset[2]
    );

    maxSubset[2] = maxSubset[1];
    maxSubset[1] = maxSubset[0];
    maxSubset[0] = maxAmountMoney;
  }

  return maxAmountMoney;
}
