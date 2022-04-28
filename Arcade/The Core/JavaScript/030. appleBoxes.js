/*
  O(n) time | O(1) space - where n is the input
*/

function solution(k) {
  let yellowApples = 0;
  let redApples = 0;

  for (let i = 1; i <= k; i++) {
    i % 2 === 1 ? (yellowApples += i * i) : (redApples += i * i);
  }

  return (yellowApples - redApples) * -1;
}
