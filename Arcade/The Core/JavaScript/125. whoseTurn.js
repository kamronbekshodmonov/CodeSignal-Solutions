/*
  O(1) time | O(1) space
*/

function solution(p) {
  let whitePoint = 0;
  let blackPoint = 0;

  const positions = p.split(";");
  const isStartingWhite = {
    a: false,
    b: true,
    c: false,
    d: true,
    e: false,
    f: true,
    g: false,
    h: true,
  };

  if (checkIsWhite(positions[0], isStartingWhite)) whitePoint++;
  if (checkIsWhite(positions[1], isStartingWhite)) whitePoint++;
  if (checkIsWhite(positions[2], isStartingWhite)) blackPoint++;
  if (checkIsWhite(positions[3], isStartingWhite)) blackPoint++;

  if (whitePoint === blackPoint) return true;
  if (Math.abs(whitePoint - blackPoint) === 2) return true;
  return false;
}

function checkIsWhite(location, isStartingWhite) {
  const letter = location[0];
  const number = Number(location[1]);

  if (isStartingWhite[letter]) return number % 2 === 1 ? true : false;
  return number % 2 === 0 ? true : false;
}
