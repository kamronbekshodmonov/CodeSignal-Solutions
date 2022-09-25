/*
  O(n) time | O(1) space - where n is the total number of elements in the array
*/

function solution(source) {
  let result = 0;
  let isLongCommentSeen = false;

  firstLoop: for (const line of source) {
    for (let i = 0; i < line.length; i++) {
      if (isLongCommentSeen) {
        if (line[i] === "*" && line[i + 1] === "/") {
          i++;
          isLongCommentSeen = false;
        }
      } else {
        if (line[i] === "/" && line[i + 1] === "/") continue firstLoop;
        if (line[i] === "/" && line[i + 1] === "*") {
          i++;
          isLongCommentSeen = true;
        } else if (line[i] !== " ") {
          result++;
        }
      }
    }
  }

  return result;
}
