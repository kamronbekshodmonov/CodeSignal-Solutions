/*
  O(1) time | O(1) space
*/

function solution(n, m) {
  return (
    times(n, m, 2, 3) +
    times(n, m, 3, 3) +
    times(n, m, 2, 4) +
    times(n, m, 3, 4)
  );
}

function times(n, m, x, y) {
  return (ways(n, m, x, y) + ways(m, n, x, y)) * 8;
}

function ways(n, m, x, y) {
  if (n < x || m < y) return 0;
  return (n - x + 1) * (m - y + 1);
}
