/*
  O(l) time | O(1) space - where l is the input level
*/

function solution(level, pos) {
  let currentNode = 1;
  let currentLevel = 1;
  let childCount = Math.pow(2, level - 1);

  while (currentLevel < level) {
    if (childCount / 2 < pos) {
      currentNode = currentNode === 1 ? 0 : 1;
      pos -= childCount / 2;
    }

    childCount /= 2;
    currentLevel++;
  }

  return currentNode === 1 ? "Engineer" : "Doctor";
}
