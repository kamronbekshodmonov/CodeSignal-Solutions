/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(path) {
  const stack = [];
  const pathSplit = path.split("/");

  for (const path of pathSplit) {
    if (path === "" || path === ".") continue;
    if (path === "..") {
      stack.pop();
    } else {
      stack.push(`/${path}`);
    }
  }

  return stack.length === 0 ? "/" : stack.join("");
}
