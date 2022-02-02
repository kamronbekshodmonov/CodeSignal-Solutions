/*
  O(1) time | O(1) space
*/

function solution(inputString) {
  const IP = inputString.split(".");
  if (IP.length !== 4) return false;

  for (const curIP of IP) {
    if (isNaN(Number(curIP))) return false;
    if (curIP[0] === "0" && curIP.length > 1) return false;
    if (curIP.length >= 4 || curIP.length === 0) return false;
    if (Number(curIP) < 0 || Number(curIP) > 255) return false;
  }

  return true;
}
