/*
  O(n * n!) time | O(n * n!) space - where n is the length of the input array
*/

function solution(inputArray) {
  return recursiveHelper(inputArray);
}

function recursiveHelper(
  inputArray,
  index = 0,
  reArrangedArr = [],
  takenIndices = {}
) {
  if (index === inputArray.length) return checkPermutation(reArrangedArr);
  for (let i = 0; i < inputArray.length; i++) {
    if (takenIndices[i] === true) continue;

    takenIndices[i] = true;
    reArrangedArr.push(inputArray[i]);

    const res = recursiveHelper(
      inputArray,
      index + 1,
      reArrangedArr,
      takenIndices
    );
    if (res) return true;

    takenIndices[i] = false;
    reArrangedArr.pop();
  }

  return false;
}

function checkPermutation(inputArray) {
  for (let i = 1; i < inputArray.length; i++) {
    let pointer = 0;
    let requiredDifference = 1;

    while (pointer < inputArray[i].length) {
      if (inputArray[i][pointer] !== inputArray[i - 1][pointer]) {
        if (requiredDifference === 0) return false;
        requiredDifference--;
      }
      pointer++;
    }
    if (requiredDifference !== 0) return false;
  }

  return true;
}
