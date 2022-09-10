/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(sourceArray, destinationArray) {
  let maxLength = 0;
  let curLength = 0;
  let maxStartingBlock = 0;
  let curStartingBlock = Infinity;

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] !== destinationArray[i]) {
      curLength = 0;
      curStartingBlock = Infinity;
    } else {
      curLength++;
      curStartingBlock = Math.min(curStartingBlock, i);
    }

    if (curLength > maxLength) {
      maxLength = curLength;
      maxStartingBlock = curStartingBlock;
    }
  }

  return [maxLength, maxStartingBlock];
}
