/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(startTag) {
  const endTag = ["</"];

  for (let i = 1; i < startTag.length; i++) {
    if (startTag[i] === " ") break;
    endTag.push(startTag[i]);
  }

  if (endTag[endTag.length - 1] !== ">") endTag.push(">");
  return endTag.join("");
}
