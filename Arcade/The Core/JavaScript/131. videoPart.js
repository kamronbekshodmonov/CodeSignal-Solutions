/*
  O(1) time | O(1) space
*/

function solution(part, total) {
  const partInSeconds = convertTimeToSeconds(part);
  const totalInSeconds = convertTimeToSeconds(total);
  const GCD = getGCD(partInSeconds, totalInSeconds);
  return [partInSeconds / GCD, totalInSeconds / GCD];
}

function convertTimeToSeconds(time) {
  const [hours, minutes, seconds] = time
    .split(":")
    .map((value) => Number(value));
  return seconds + minutes * 60 + hours * 60 * 60;
}

function getGCD(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;

  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}
