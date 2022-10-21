/*
  O(1) time | O(1) space
*/

function solution(time) {
  const [hours, minutes] = time.split(":").map((value) => Number(value));
  if (hours >= 24 || minutes >= 60) return false;
  return true;
}
