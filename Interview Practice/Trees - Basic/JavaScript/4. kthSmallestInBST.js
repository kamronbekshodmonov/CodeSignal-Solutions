/*
  O(h + k) time | O(h) space - where h is the height of the tree and k is the input parameter
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t, k) {
  const treeInfo = {
    seenNodeCount: 0,
    kthSmallest: null,
  };

  recursiveHelper(t, k, treeInfo);
  return treeInfo.kthSmallest;
}

function recursiveHelper(tree, k, treeInfo) {
  if (!tree || treeInfo.kthSmallest !== null) return treeInfo;
  recursiveHelper(tree.left, k, treeInfo);
  treeInfo.seenNodeCount++;
  if (treeInfo.seenNodeCount === k) {
    treeInfo.kthSmallest = tree.value;
    return treeInfo;
  }
  recursiveHelper(tree.right, k, treeInfo);
  return treeInfo;
}
