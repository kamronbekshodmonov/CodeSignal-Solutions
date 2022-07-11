/*
  Average: O(nlog(m)) time | O(nlog(m)) space
  Worst: O(nm) time | O(nm) space - where n is the length of the input array and m is the number of nodes in the tree
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t, queries) {
  const rightmost = (node) => (node.right ? rightmost(node.right) : node);
  const noRightmost = (node) => {
    if (!node.right) return node.left;
    node.right = noRightmost(node.right);
    return node;
  };

  const trim = (node, value) => {
    if (node === null) return null;
    if (node.value === value) {
      if (node.left === null) return node.right;
      let next = rightmost(node.left);
      next.left = noRightmost(node.left);
      next.right = node.right;
      return next;
    }

    node.left = trim(node.left, value);
    node.right = trim(node.right, value);
    return node;
  };

  return queries.reduce((acc, query) => trim(acc, query), t);
}
