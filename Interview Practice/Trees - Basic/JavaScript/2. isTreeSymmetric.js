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
function solution(t) {
  if (!t) return true;
  return checkNodes(t.left, t.right);
}

function checkNodes(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2 || node1.value !== node2.value) return false;
  return (
    checkNodes(node1.left, node2.right) && checkNodes(node2.left, node1.right)
  );
}
