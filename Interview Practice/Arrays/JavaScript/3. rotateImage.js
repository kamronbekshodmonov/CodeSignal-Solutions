/*
  O(n) time | O(1) space - where n is the total number of elements in the array
*/

function solution(a) {
  let startIdx = 0;
  let endIdx = a.length - 1;

  while (startIdx < endIdx) {
    for (
      let curIdx = startIdx, newIdx = 0;
      curIdx < endIdx;
      curIdx++, newIdx++
    ) {
      const topLeftVal = a[startIdx][curIdx];
      const topRightVal = a[curIdx][endIdx];
      const bottomRightVal = a[endIdx][endIdx - newIdx];
      const bottomLeftVal = a[endIdx - newIdx][startIdx];

      a[curIdx][endIdx] = topLeftVal;
      a[endIdx][endIdx - newIdx] = topRightVal;
      a[endIdx - newIdx][startIdx] = bottomRightVal;
      a[startIdx][curIdx] = bottomLeftVal;
    }

    endIdx--;
    startIdx++;
  }

  return a;
}
