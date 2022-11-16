/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(table, row, column) {
  const rowValue = table.split("<tr>")[row + 1];
  if (!rowValue) return "No such cell";

  const colValue = rowValue.split("<td>")[column + 1];
  if (!colValue) return "No such cell";

  return colValue.split("</td>")[0];
}
