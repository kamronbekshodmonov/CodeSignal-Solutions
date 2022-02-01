/*
  O(n^2) time | O(n) space - where n is the length of the input string
*/

function solution(inputString) {
  const stack = [];
  const inputArr = inputString.split("");

  for (let i = 0; i < inputArr.length; i++) {
    const char = inputArr[i];
    if (char === "(") stack.push(i);
    if (char === ")") {
      reverseElementsInArray(inputArr, stack.pop(), i);
    }
  }

  return inputArr.join("");
}

function reverseElementsInArray(inputArr, startIdx, endIdx) {
  while (startIdx < endIdx) {
    if (inputArr[startIdx] === "(" || inputArr[startIdx] === ")")
      inputArr[startIdx] = "";

    if (inputArr[endIdx] === "(" || inputArr[endIdx] === ")")
      inputArr[endIdx] = "";

    const temp = inputArr[startIdx];
    inputArr[startIdx] = inputArr[endIdx];
    inputArr[endIdx] = temp;
    startIdx++;
    endIdx--;
  }
}
