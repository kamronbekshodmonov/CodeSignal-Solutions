/*
  O(n) time | O(n) space - where n is the length of the input array
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(inorder, preorder) {
  const inorderValuesIndex = {};
  const preorderInfo = { curIndex: 0 };
  inorder.forEach((value, index) => (inorderValuesIndex[value] = index));

  return recursiveHelper(
    preorder,
    inorderValuesIndex,
    preorderInfo,
    0,
    inorder.length
  );
}

function recursiveHelper(
  preorder,
  inorderValuesIndex,
  preorderInfo,
  startIndex,
  endIndex
) {
  if (!(startIndex < endIndex && preorderInfo.curIndex < preorder.length))
    return null;

  const preorderValue = preorder[preorderInfo.curIndex];
  const tree = new Tree(preorderValue);

  const inorderValue = inorderValuesIndex[preorderValue];

  preorderInfo.curIndex++;

  tree.left = recursiveHelper(
    preorder,
    inorderValuesIndex,
    preorderInfo,
    startIndex,
    inorderValue
  );
  tree.right = recursiveHelper(
    preorder,
    inorderValuesIndex,
    preorderInfo,
    inorderValue + 1,
    endIndex
  );

  return tree;
}
