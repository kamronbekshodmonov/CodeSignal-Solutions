/*
  O(n) time | O(1) space - where n is the number of nodes in the Linked List
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l) {
  if (!l) return true;
  let curNode = l;
  let reversedHalfOfLinkedList = reverseHalfOfTheLinkedList(l);

  while (reversedHalfOfLinkedList) {
    if (curNode.value !== reversedHalfOfLinkedList.value) return false;
    curNode = curNode.next;
    reversedHalfOfLinkedList = reversedHalfOfLinkedList.next;
  }

  return true;
}

function reverseHalfOfTheLinkedList(head) {
  let tortoise = head;
  let hair = head.next;

  while (hair && hair.next) {
    hair = hair.next.next;
    tortoise = tortoise.next;
  }

  reverseLinkedListAfterHead(tortoise);
  return tortoise.next;
}

function reverseLinkedListAfterHead(head) {
  let curNode = head.next;

  while (curNode && curNode.next) {
    const temp = curNode.next;
    curNode.next = curNode.next.next;
    temp.next = head.next;
    head.next = temp;
  }
}
