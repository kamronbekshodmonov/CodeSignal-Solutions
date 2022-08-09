/*
  O(n^2) time | O(n) space - where n is the length of the input string
*/

function solution(fileSystem) {
  let path = [];
  let longest = 0;

  fileSystem.split(/\f/).forEach((file) => {
    let s = [];
    let last = "";

    file.split(/\t/).forEach((tag, i) => {
      last = path[i] = s[i] = tag.length ? tag : path[i];
    });

    if (last.indexOf(".") > -1) {
      longest = Math.max(longest, s.join(`/`).length);
    }
  });

  return longest;
}
