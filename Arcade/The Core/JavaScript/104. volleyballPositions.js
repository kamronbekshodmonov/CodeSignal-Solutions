/*
  O(n) time | O(n) space - where n is the max word length in the input array
*/

function solution(formation, k) {
  k %= 6;
  if (k === 0) return formation;

  const locations = [
    [3, 2],
    [1, 2],
    [0, 1],
    [1, 0],
    [3, 0],
    [2, 1],
  ];
  const names = locations.map(([row, col]) => formation[row][col]);

  locations.forEach((_, index) => {
    const [nextRow, nextCol] = locations[Math.abs(index + k) % 6];
    formation[nextRow][nextCol] = names[index];
  });

  return formation;
}
