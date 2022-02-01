/*
  O(n) time | O(1) space - where n is the total number of elements in the array
*/

function solution(picture) {
  let maxCol = 0;
  for (let row = 0; row < picture.length; row++) {
    maxCol = Math.max(maxCol, picture[row].length);
    picture[row] = "*" + picture[row] + "*";
  }

  picture.unshift(new Array(maxCol + 2).fill("*").join(""));
  picture.push(new Array(maxCol + 2).fill("*").join(""));
  return picture;
}
