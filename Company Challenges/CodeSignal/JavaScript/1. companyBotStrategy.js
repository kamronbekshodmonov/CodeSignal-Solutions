/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(trainingData) {
  let sum = 0;
  let count = 0;

  for (const data of trainingData) {
    const [answerTime, correctness] = data;
    if (correctness === 1) {
      count++;
      sum += answerTime;
    }
  }

  return sum === 0 ? sum : sum / count;
}
