/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(a) {
  let teams = [0, 0];
  for (let i = 0; i < a.length; i++) {
    i % 2 === 0 ? (teams[0] += a[i]) : (teams[1] += a[i]);
  }
  return teams;
}
