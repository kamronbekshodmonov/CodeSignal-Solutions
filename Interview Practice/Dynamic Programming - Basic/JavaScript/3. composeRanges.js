/*
  O(n) time | O(m) space - where n is the length of the input array and m is the unique number of ranges
*/

function solution(nums) {
  const res = [];
  let pointer = 0;

  while (pointer < nums.length) {
    let start = nums[pointer];
    let end = nums[pointer];

    while (nums[pointer + 1] - end <= 1) {
      pointer++;
      end = nums[pointer];
    }

    const range = start === end ? String(start) : `${start}->${end}`;
    res.push(range);
    pointer++;
  }

  return res;
}
