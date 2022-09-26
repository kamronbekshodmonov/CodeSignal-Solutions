/*
  O(n) time | O(1) space - where n is the total number of elements in the array
*/

function solution(evidences) {
  let isInformationConsistent = true;

  firstLoop: for (let col = 0; col < evidences[0].length; col++) {
    let prevAnswer = 0;

    for (let row = 0; row < evidences.length; row++) {
      const isPrevAnswerZero = prevAnswer === 0;
      const isEvidenceZero = evidences[row][col] === 0;
      const arePrevAnswerAndEvidenceEqual = prevAnswer === evidences[row][col];

      if (
        !isPrevAnswerZero &&
        !isEvidenceZero &&
        !arePrevAnswerAndEvidenceEqual
      ) {
        isInformationConsistent = false;
        break firstLoop;
      }

      if (prevAnswer === 0) prevAnswer = evidences[row][col];
    }
  }

  return isInformationConsistent;
}
