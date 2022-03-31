/*
  O(n) time | O(1) space - where n is the number of nodes in the Linked List
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(a, b) {
  let reversedA = reverseNode(a);
  let reversedB = reverseNode(b);
  const addedList = addTwoListNode(reversedA, reversedB);
  return addedList.reverse();
}

function reverseNode(node) {
  let parentNode = new ListNode(0);
  parentNode.next = node;

  while (node.next) {
    const nextNodePointer = node.next;
    node.next = node.next.next;
    nextNodePointer.next = parentNode.next;
    parentNode.next = nextNodePointer;
  }

  return parentNode.next;
}

function addTwoListNode(nodeA, nodeB) {
  const res = [];
  let remainder = 0;

  while (nodeA !== null || nodeB !== null || remainder > 0) {
    const valueA = nodeA !== null ? nodeA.value : 0;
    const valueB = nodeB !== null ? nodeB.value : 0;
    const sum = valueA + valueB + remainder;

    res.push(sum % 10000);
    remainder = Math.floor(sum / 10000);

    if (nodeA !== null) nodeA = nodeA.next;
    if (nodeB !== null) nodeB = nodeB.next;
  }

  return res;
}
