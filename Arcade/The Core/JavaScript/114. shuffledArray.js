/*
  O(nlog(n)) time | O(m) space - where n is the length of the input array and m is the unique number of elements in the input array
*/

function solution(shuffled) {
  let sum = 0;
  const numbers = new Map();

  shuffled.forEach((num, index) => {
    sum += num;
    numbers.set(num, index);
  });

  for (const num of shuffled) {
    let potentialNum = sum - num;
    if (numbers.has(potentialNum)) {
      shuffled.splice(numbers.get(potentialNum), 1);
      return shuffled.sort((a, b) => a - b);
    }
  }
}
