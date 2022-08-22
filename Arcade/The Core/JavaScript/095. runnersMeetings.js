/*
  O(n^3) time | O(1) space - where n is the length of the input array
*/

function solution(startPosition, speed) {
  let meetings = 1;

  for (let i = 0; i < startPosition.length; i++) {
    for (let j = i + 1; j < startPosition.length; j++) {
      let count = 0;
      let positionDifference = startPosition[j] - startPosition[i];
      let speedDifference = speed[i] - speed[j];

      if (speedDifference === 0 && positionDifference !== 0) continue;

      for (let k = 0; k < startPosition.length; k++) {
        if (
          startPosition[k] * speedDifference + speed[k] * positionDifference ===
          startPosition[i] * speedDifference + speed[i] * positionDifference
        ) {
          count++;
        }
      }

      if (count === 0) continue;
      if (count > meetings) meetings = count;
    }
  }

  if (meetings < 2) meetings = -1;
  return meetings;
}
