/*
  O(n) time | O(1) space - where n is the length of the votes array
*/

function solution(votes, k) {
  let maxVote = -Infinity;
  let sameMaxVoteCandidates = 0;

  votes.forEach((vote) => {
    if (vote === maxVote) sameMaxVoteCandidates++;
    if (vote > maxVote) {
      maxVote = vote;
      sameMaxVoteCandidates = 1;
    }
  });
  if (sameMaxVoteCandidates > 1 && k === 0) return 0;
  if (sameMaxVoteCandidates === 1 && k === 0) return 1;

  let potentialWinners = 0;
  for (const vote of votes) {
    if (vote + k > maxVote) potentialWinners++;
  }

  return potentialWinners;
}
