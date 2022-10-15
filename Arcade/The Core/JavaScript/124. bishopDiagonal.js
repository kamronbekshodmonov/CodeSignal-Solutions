/*
  O(1) time | O(1) space
*/

function solution(bishop1, bishop2) {
  const bishop1Position = [bishop1[0].charCodeAt(), Number(bishop1[1])];
  const bishop2Position = [bishop2[0].charCodeAt(), Number(bishop2[1])];
  const bishopsSeeEachOther = doBishopsSeeEachOther(
    bishop1Position,
    bishop2Position
  );

  if (!bishopsSeeEachOther) return [bishop1, bishop2].sort();

  const bishop1RushedPosition = rushBishopOppositeDiagonal(
    bishop1Position,
    bishop2Position
  );
  const bishop2RushedPosition = rushBishopOppositeDiagonal(
    bishop2Position,
    bishop1Position
  );
  return [bishop1RushedPosition, bishop2RushedPosition].sort();
}

function doBishopsSeeEachOther([...bishop1], [...bishop2]) {
  if (bishop1[0] === bishop2[0] || bishop1[1] === bishop2[1]) {
    return false;
  }

  const charCodeA = "a".charCodeAt();
  const charCodeH = "h".charCodeAt();

  while (
    bishop1[1] >= 1 &&
    bishop1[1] <= 8 &&
    bishop1[0] >= charCodeA &&
    bishop1[0] <= charCodeH &&
    bishop1[0] !== bishop2[0] &&
    bishop1[1] !== bishop2[1]
  ) {
    bishop1[0] < bishop2[0] ? bishop1[0]++ : bishop1[0]--;
    bishop1[1] < bishop2[1] ? bishop1[1]++ : bishop1[1]--;
  }

  return bishop1[0] === bishop2[0] && bishop1[1] === bishop2[1];
}

function rushBishopOppositeDiagonal(bishop1, bishop2) {
  const charCodeA = "a".charCodeAt();
  const charCodeH = "h".charCodeAt();

  while (
    bishop1[1] >= 1 &&
    bishop1[1] <= 8 &&
    bishop1[0] >= charCodeA &&
    bishop1[0] <= charCodeH
  ) {
    if (bishop1[1] < bishop2[1] && bishop1[1] - 1 < 1) break;
    if (bishop1[1] > bishop2[1] && bishop1[1] + 1 > 8) break;
    if (bishop1[0] < bishop2[0] && bishop1[0] - 1 < charCodeA) break;
    if (bishop1[0] > bishop2[0] && bishop1[0] + 1 > charCodeH) break;
    bishop1[0] < bishop2[0] ? bishop1[0]-- : bishop1[0]++;
    bishop1[1] < bishop2[1] ? bishop1[1]-- : bishop1[1]++;
  }

  return `${String.fromCharCode(bishop1[0])}${bishop1[1]}`;
}
