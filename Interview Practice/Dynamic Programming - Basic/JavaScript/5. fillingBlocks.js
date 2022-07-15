/*
  O(n) time | O(n) space - where n is the input
*/

function solution(n) {
  const seen = { 0: 1, 1: 1, 2: 5, 3: 11 };
  return recursiveHelper(n, seen);
}

function recursiveHelper(n, seen) {
  if (seen.hasOwnProperty(n)) return seen[n];
  return (
    recursiveHelper(n - 1, seen) +
    5 * recursiveHelper(n - 2, seen) +
    recursiveHelper(n - 3, seen) -
    recursiveHelper(n - 4, seen)
  );
}
