/*
  O(n^2 * m) time | O(1) space - where n is the length of the input array and m is the length of the second input
*/

function solution(inputArray, result) {
  let crossover = 0;

  for (let indexOne = 0; indexOne < inputArray.length; indexOne++) {
    if (inputArray[indexOne] === result) {
      crossover += inputArray.length - indexOne - 1;
      continue;
    }

    secondLoop: for (
      let indexTwo = indexOne + 1;
      indexTwo < inputArray.length;
      indexTwo++
    ) {
      for (let charIndex = 0; charIndex < result.length; charIndex++) {
        if (
          inputArray[indexOne][charIndex] !== result[charIndex] &&
          inputArray[indexTwo][charIndex] !== result[charIndex]
        ) {
          continue secondLoop;
        }
      }

      crossover++;
    }
  }

  return crossover;
}
