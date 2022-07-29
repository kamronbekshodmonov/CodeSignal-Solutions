/*
  O(n + klog(k)) time | O(1) space - where n is the length of the input array and k is the second input
*/

function solution(nums, k) {
  const maxHeap = new MaxHeap(nums);

  for (let i = 1; i < k; i++) maxHeap.remove();
  return maxHeap.heap[0];
}

class MaxHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    let lastParent = Math.floor((array.length - 2) / 2);
    for (let i = lastParent; i >= 0; i--) {
      this.siftDown(i, array);
    }

    return array;
  }

  siftDown(index, array) {
    let childOneIndex = index * 2 + 1;
    while (childOneIndex < array.length) {
      const isChildOneGreater =
        array[childOneIndex] >= (array[childOneIndex + 1] || -Infinity);
      const maxChildIndex = isChildOneGreater
        ? childOneIndex
        : childOneIndex + 1;

      if (array[index] >= array[maxChildIndex]) break;

      this.swap(index, maxChildIndex, array);
      index = maxChildIndex;
      childOneIndex = index * 2 + 1;
    }
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const value = this.heap.pop();

    this.siftDown(0, this.heap);

    return value;
  }

  swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
