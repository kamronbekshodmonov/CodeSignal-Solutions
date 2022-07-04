/*
  O(n) time | O(h) space - where n is the number of nodes in the tree and h is the height of the tree
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t, s) {
  if (!t) return false;
  if (!t.left && !t.right) return t.value === s;
  return recursiveHelper(t, s, 0, 0);
}

function recursiveHelper(tree, sum, currentSum, depth) {
  if (!tree) return currentSum === sum && depth > 1;
  const leftSubtree = recursiveHelper(
    tree.left,
    sum,
    currentSum + tree.value,
    depth + 1
  );
  const rightSubtree = recursiveHelper(
    tree.right,
    sum,
    currentSum + tree.value,
    depth + 1
  );
  return leftSubtree || rightSubtree;
}
