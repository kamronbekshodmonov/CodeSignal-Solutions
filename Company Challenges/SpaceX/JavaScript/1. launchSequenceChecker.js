/*
  O(n) time | O(k * m) space - where n is the length of the input array, k is the max word length in the systemNames array and m is the unique number of strings in the systemNames array
*/

function solution(systemNames, stepNumbers) {
  const seenSystemNames = new Map();

  for (let i = 0; i < systemNames.length; i++) {
    const isSystemExists = seenSystemNames.has(systemNames[i]);
    const isSystemGreaterOrEqual =
      isSystemExists && seenSystemNames.get(systemNames[i]) >= stepNumbers[i];

    if (isSystemGreaterOrEqual) return false;
    seenSystemNames.set(systemNames[i], stepNumbers[i]);
  }

  return true;
}
