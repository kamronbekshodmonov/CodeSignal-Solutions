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
  if (!l) return null;
  let parentNode = l;
  let curNode = l.next;

  while (curNode) {
    if (curNode.value === k) {
      parentNode.next = curNode.next;
      curNode = curNode.next;
    } else {
      parentNode = parentNode.next;
      curNode = parentNode.next;
    }
  }

  return l.value === k ? l.next : l;
}
