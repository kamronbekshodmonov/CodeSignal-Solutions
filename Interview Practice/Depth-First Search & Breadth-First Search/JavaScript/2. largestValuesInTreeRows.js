/*
  O(n) time | O(n) space - where n is the number of nodes in the tree
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
  return bfsHelper(t);
}

function bfsHelper(tree) {
  const res = [];
  let stack = [tree];
  let innerStack = [];

  while (stack.length > 0) {
    let curMax = -Infinity;

    while (stack.length > 0) {
      const curTree = stack.pop();
      curMax = Math.max(curMax, curTree.value);
      if (curTree.left) innerStack.push(curTree.left);
      if (curTree.right) innerStack.push(curTree.right);
    }

    res.push(curMax);
    stack = innerStack;
    innerStack = [];
  }

  return res;
}
