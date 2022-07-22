/*
  O(n) time | O(n) space - where n is the number of nodes in the tree (assuming we have implemented queue)
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
  const res = [];
  const queue = [t];

  while (queue.length > 0) {
    const tree = queue.shift();
    res.push(tree.value);
    if (tree.left) queue.push(tree.left);
    if (tree.right) queue.push(tree.right);
  }

  return res;
}
