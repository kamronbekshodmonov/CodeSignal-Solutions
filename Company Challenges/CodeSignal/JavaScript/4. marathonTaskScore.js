/*
  O(1) time | O(1) space
*/

function solution(
  marathonLength,
  maxScore,
  submissions,
  successfulSubmissionTime
) {
  if (successfulSubmissionTime < 0) return 0;
  if (successfulSubmissionTime === 1 && submissions === 1) return maxScore;

  const unsuccessfulAttemptPenalty = 10 * (submissions - 1);
  const additionalMinutePenalty =
    successfulSubmissionTime * (maxScore / 2) * (1 / marathonLength);
  const curScore =
    maxScore - unsuccessfulAttemptPenalty - additionalMinutePenalty;

  if (curScore < maxScore / 2) return maxScore / 2;
  return curScore;
}
