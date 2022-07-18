/*
  O(n + klog(k)) time | O(d + m) space - where n is the number of nodes in the tree, k is the number of most frequent sums of its subtrees, d is the height of the tree and m is the unique number of sums of its subtrees
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t) {
  if (!t) return [];
  const treeInfo = {
    seenSums: {},
    mostFrequentSum: 0,
  };

  dfsHelper(t, treeInfo);

  const res = [];
  for (const key in treeInfo.seenSums) {
    if (treeInfo.seenSums[key] === treeInfo.mostFrequentSum) {
      res.push(Number(key));
    }
  }

  return res.sort((a, b) => a - b);
}

function dfsHelper(tree, treeInfo) {
  let leftSubtreeSum = 0;
  let rightSubtreeSum = 0;

  if (tree.left) leftSubtreeSum = dfsHelper(tree.left, treeInfo);
  if (tree.right) rightSubtreeSum = dfsHelper(tree.right, treeInfo);

  const curSum = tree.value + leftSubtreeSum + rightSubtreeSum;

  addToSeenSums(treeInfo, curSum);
  treeInfo.mostFrequentSum = Math.max(
    treeInfo.mostFrequentSum,
    treeInfo.seenSums[curSum]
  );

  return curSum;
}

function addToSeenSums(treeInfo, value) {
  if (!treeInfo.seenSums.hasOwnProperty(value)) {
    treeInfo.seenSums[value] = 0;
  }

  treeInfo.seenSums[value]++;
}
