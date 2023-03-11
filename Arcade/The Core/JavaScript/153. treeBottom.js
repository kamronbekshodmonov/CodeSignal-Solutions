/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(tree) {
  const treeSplit = tree.split("(");
  const treeHelper = new TreeHelper();
  dfsHelper(treeSplit, treeHelper, 1);
  return treeHelper.maxDepthValues;
}

function dfsHelper(tree, treeHelper, depth) {
  const char = tree[treeHelper.location];
  treeHelper.location++;

  if (!isCharANumber(char)) return;

  if (treeHelper.maxDepth < depth) {
    treeHelper.maxDepth = depth;
    treeHelper.maxDepthValues = [];
  }

  if (treeHelper.maxDepth <= depth) {
    treeHelper.maxDepthValues.push(Number(char));
  }

  dfsHelper(tree, treeHelper, depth + 1);
  dfsHelper(tree, treeHelper, depth + 1);
}

class TreeHelper {
  constructor() {
    this.location = 1;
    this.maxDepth = 1;
    this.maxDepthValues = [];
  }
}

function isCharANumber(char) {
  return !Number.isNaN(Number(char)) && char !== " ";
}
