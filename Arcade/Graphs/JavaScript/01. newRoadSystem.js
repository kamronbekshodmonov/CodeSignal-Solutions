/*
  O(n) time | O(1) space - where n is the total number of elements in the array
*/

function solution(roadRegister) {
  for (let i = 0; i < roadRegister.length; i++) {
    let rowCount = 0;
    let colCount = 0;
    for (let j = 0; j < roadRegister.length; j++) {
      if (roadRegister[i][j]) rowCount++;
      if (roadRegister[j][i]) colCount++;
    }
    if (rowCount !== colCount) return false;
  }

  return true;
}
