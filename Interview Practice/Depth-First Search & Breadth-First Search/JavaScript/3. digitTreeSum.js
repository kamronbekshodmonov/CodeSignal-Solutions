/*
  Average case: when the tree is balanced
  O(n) time | O(h) space - where n is the number of nodes in the Tree and h is the height of the Binary Tree
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t) {
  if (!t) return 0;
  return dfsHelper(t, 0);
}

function dfsHelper(tree, sum) {
  sum = sum * 10 + tree.value;
  if (!tree.left && !tree.right) return sum;

  let leftSum = 0;
  let rightSum = 0;
  if (tree.left) leftSum = dfsHelper(tree.left, sum);
  if (tree.right) rightSum = dfsHelper(tree.right, sum);
  return leftSum + rightSum;
}
