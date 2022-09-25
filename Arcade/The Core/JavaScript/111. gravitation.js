/*
  O(n) time | O(m) space - where n is the total number of elements in the array and m is the length of the input array
*/

function solution(rows) {
  const result = [];
  let minStepsRequired = Infinity;

  for (let col = 0; col < rows[0].length; col++) {
    let row = rows.length - 1;
    let curMinStepsRequired = 0;
    let prevCurMinStepsRequired = 0;

    while (row >= 0) {
      while (row >= 0 && rows[row][col] === "#") row--;
      while (row >= 0 && rows[row][col] === ".") {
        row--;
        curMinStepsRequired++;
      }
      if (row >= 0) {
        prevCurMinStepsRequired = curMinStepsRequired;
      } else {
        while (result.length && minStepsRequired > prevCurMinStepsRequired)
          result.pop();
        if (minStepsRequired >= prevCurMinStepsRequired) {
          result.push(col);
          minStepsRequired = prevCurMinStepsRequired;
        }
      }
    }
  }

  return result;
}
