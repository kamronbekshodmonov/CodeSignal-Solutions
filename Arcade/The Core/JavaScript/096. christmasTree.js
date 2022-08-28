/*
  O(n * m * k) time | O(n * m * k) space - where n is the input levelNum, m is the input levelHeight, and k is the maxWidthLength
*/

function solution(levelNum, levelHeight) {
  const tree = [];
  const maxWidthLength = 5 + (levelNum - 1) * 2 + (levelHeight - 1) * 2;

  addCrown(tree, maxWidthLength);
  addLevel(tree, maxWidthLength, levelNum, levelHeight);
  addFoot(tree, maxWidthLength, levelNum, levelHeight);

  return tree;
}

function addCrown(tree, maxWidthLength) {
  tree.push(createAsterisks(1, maxWidthLength));
  tree.push(createAsterisks(1, maxWidthLength));
  tree.push(createAsterisks(3, maxWidthLength));
}

function addLevel(tree, maxWidthLength, levelNum, levelHeight) {
  let width = 5;

  for (let i = 0; i < levelNum; i++) {
    for (let j = 0; j < levelHeight; j++) {
      tree.push(createAsterisks(width + i * 2 + j * 2, maxWidthLength));
    }
  }
}

function addFoot(tree, maxWidthLength, levelNum, levelHeight) {
  let asterisksCount = levelHeight % 2 !== 0 ? levelHeight : levelHeight + 1;

  for (let i = 0; i < levelNum; i++) {
    tree.push(createAsterisks(asterisksCount, maxWidthLength));
  }
}

function createAsterisks(asterisksLength, maxWidthLength) {
  const emptyString = new Array((maxWidthLength - asterisksLength) / 2)
    .fill(" ")
    .join("");
  const asterisks = new Array(asterisksLength).fill("*").join("");
  return `${emptyString}${asterisks}`;
}
