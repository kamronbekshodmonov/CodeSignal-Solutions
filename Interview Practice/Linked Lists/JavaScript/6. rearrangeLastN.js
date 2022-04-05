/*
  O(n) time | O(1) space - where n is the number of nodes in the Linked List
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l, n) {
  if (n === 0 || !l) return l;
  let pointer = 1;
  let curNode = l;
  const [linkedListLength, tailNode] = getLinkedListLengthAndTail(l);
  if (linkedListLength === n) return l;

  while (pointer < linkedListLength - n) {
    pointer++;
    curNode = curNode.next;
  }

  const temp = curNode.next;
  curNode.next = null;
  tailNode.next = l;
  return temp;
}

function getLinkedListLengthAndTail(l) {
  let res = 0;
  let curNode = l;

  while (curNode) {
    if (!curNode.next) return [res + 1, curNode];
    res++;
    curNode = curNode.next;
  }
}
