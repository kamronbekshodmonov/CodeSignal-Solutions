/*
  O(log(n) * n * m) time | O(n * m) space - where n is the number of rows in the input table and m is the number of columns in the input table
*/

function solution(table, coords) {
  const mergingRows = [coords[0][0], coords[1][0]].sort();
  const mergingCols = [coords[0][1], coords[1][1]].sort();

  let curRow = -1;
  let curCol = -1;
  let isTopBorder = false;
  let isBottomBorder = false;
  let isFirstColChar = false;
  let inMergingColRange = false;

  return table.map((row, i) => {
    if (row[0] === "+") curRow++;

    isTopBorder = i === 0;
    isBottomBorder = i === table.length - 1;

    if (curRow < mergingRows[0]) return row;
    if (curRow > mergingRows[1]) {
      if (!(curRow - 1 === mergingRows[1] && isBottomBorder)) {
        return row;
      }
    }

    if (curRow === mergingRows[0] && row[0] === "+" && !isTopBorder) return row;

    curCol = -1;

    return row.split("").reduce((acc, val, c) => {
      isFirstColChar = false;

      if (val === "+" || val === "|") {
        curCol++;
        isFirstColChar = curCol === mergingCols[0];
      }

      inMergingColRange = curCol >= mergingCols[0] && curCol <= mergingCols[1];

      if (isBottomBorder || isTopBorder) {
        if (c === 0) return acc + "+";
        if (val === "+" && inMergingColRange && !isFirstColChar)
          return acc + "-";

        return acc + val;
      }

      if (c === 0) return acc + (inMergingColRange ? "|" : val);

      if (
        inMergingColRange &&
        !isFirstColChar &&
        ["|", "-", "+"].includes(val)
      ) {
        return acc + " ";
      }

      if (c === row.length - 1) return acc + (acc[c - 1] === "-" ? "+" : "|");

      return acc + val;
    }, "");
  });
}
