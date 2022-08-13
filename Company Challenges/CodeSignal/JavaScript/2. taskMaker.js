/*
  O(n * m) time | O(n * m) space - where n is the length of the input array and m is the max word length in the input array
*/

function solution(source, challengeId) {
  const result = [];
  let prevSeenComment = 0;

  source.forEach((line, lineIndex) => {
    if (line.indexOf("//DB") === -1) {
      result.push(line);
      prevSeenComment = 0;
    } else {
      const dbCode = getDBCode(line, challengeId);
      if (dbCode) {
        const space = getLineSpace(source[lineIndex - prevSeenComment - 1]);
        result[result.length - 1] = `${space}${dbCode}`;
      }
      prevSeenComment++;
    }
  });

  return result;
}

function getDBCode(line, challengeId) {
  const lineSplit = line.split("//");
  const curChallengeId = Number(lineSplit[1].split("DB ")[1]);

  if (curChallengeId === challengeId) return lineSplit[2];
  return null;
}

function getLineSpace(line) {
  console.log({ line });
  const res = [];
  for (const char of line) {
    if (char !== " ") break;
    res.push(" ");
  }

  return res.join("");
}
