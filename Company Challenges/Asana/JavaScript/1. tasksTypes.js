/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(deadlines, day) {
  const result = [0, 0, 0];

  for (const deadline of deadlines) {
    if (deadline <= day) {
      result[0]++;
    } else if (day + 1 <= deadline && deadline <= day + 7) {
      result[1]++;
    } else {
      result[2]++;
    }
  }

  return result;
}
