/*
  O(n + m) time | O(1) space - where n is the number of nodes in the first Linked List and m is the number of nodes in the second Linked List
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let smallestStartingNode = l1.value <= l2.value ? l1 : l2;
  let greatestStartingNode = l1.value <= l2.value ? l2 : l1;

  while (greatestStartingNode) {
    if (!smallestStartingNode.next) {
      smallestStartingNode.next = greatestStartingNode;
      break;
    }

    if (smallestStartingNode.next.value <= greatestStartingNode.value) {
      smallestStartingNode = smallestStartingNode.next;
    } else {
      const temp = greatestStartingNode;
      greatestStartingNode = greatestStartingNode.next;
      temp.next = smallestStartingNode.next;
      smallestStartingNode.next = temp;
      smallestStartingNode = temp;
    }
  }

  return l1.value <= l2.value ? l1 : l2;
}
