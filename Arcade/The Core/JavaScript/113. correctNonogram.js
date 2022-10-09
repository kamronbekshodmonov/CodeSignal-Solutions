/*
  O(n) time | O(i + j) space - where n is the total number of elements in the array, i is the length of the row and j is the length of the column
*/

function solution(size, nonogramField) {
  const offset = Math.ceil(size / 2);
  const areRowsCorrect = checkAreRowsCorrect(offset, match, nonogramField);
  const areColumnsCorrect = checkAreColumnsCorrect(
    offset,
    match,
    size,
    nonogramField
  );

  return areRowsCorrect && areColumnsCorrect;
}

function match(numsChunk, canvChunk) {
  const numbersSeq = numsChunk.filter((cell) => cell !== "-");
  const canvasSeq = canvChunk
    .join("")
    .split(".")
    .filter((hashes) => hashes)
    .map((hashes) => hashes.length);
  return numbersSeq.join("") === canvasSeq.join("");
}

function checkAreRowsCorrect(offset, match, nonogramField) {
  for (let i = offset; i < nonogramField.length; i++) {
    const numbers = nonogramField[i].slice(0, offset);
    const canvas = nonogramField[i].slice(offset);
    if (!match(numbers, canvas)) return false;
  }
  return true;
}

function checkAreColumnsCorrect(offset, match, size, nonogramField) {
  for (let i = offset; i < size + offset; i++) {
    const column = [];
    for (let j = 0; j < nonogramField.length; j++) {
      column.push(nonogramField[j][i]);
    }
    const numbers = column.slice(0, offset);
    const canvas = column.slice(offset);
    if (!match(numbers, canvas)) return false;
  }
  return true;
}
