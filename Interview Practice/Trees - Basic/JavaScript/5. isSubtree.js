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
function solution(t1, t2) {
  if (!t2) return true;
  if (!t1) return false;
  return recursiveHelper(t1, t2);
}

function recursiveHelper(t1, t2) {
  if (!t1) return false;
  if (t1.value === t2.value) return checkNodes(t1, t2);
  const isLeftSubtree = recursiveHelper(t1.left, t2);
  const isRightSubtree = recursiveHelper(t1.right, t2);
  return isLeftSubtree || isRightSubtree;
}

function checkNodes(t1, t2) {
  if (!t1 && !t2) return true;
  if ((!t1 && t2) || (t1 && !t2)) return false;
  if (t1.value !== t2.value) return false;
  const isLeftSubtreeValid = checkNodes(t1.left, t2.left);
  const isRightSubtreeValid = checkNodes(t1.right, t2.right);
  return isLeftSubtreeValid && isRightSubtreeValid;
}
