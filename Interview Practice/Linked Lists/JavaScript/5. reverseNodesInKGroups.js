/*
  O(n) time | O(1) space - where n is the number of nodes in the Linked List
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l, k) {
  let curNode = l;
  let parentNode = new ListNode(0);
  parentNode.next = l;
  l = parentNode;
  let linkedListLength = getLinkedListLength(l);

  while (curNode) {
    let pointer = 1;
    if (k >= linkedListLength) break;
    console.log(linkedListLength);
    while (pointer < k && curNode && curNode.next) {
      pointer++;
      const temp = curNode.next;
      curNode.next = curNode.next ? curNode.next.next : null;
      temp.next = parentNode.next;
      parentNode.next = temp;
    }
    linkedListLength -= k;
    parentNode = curNode;
    if (curNode) curNode = curNode.next;
  }

  return l.next;
}

function getLinkedListLength(node) {
  let res = 0;
  while (node) {
    res++;
    node = node.next;
  }

  return res;
}
