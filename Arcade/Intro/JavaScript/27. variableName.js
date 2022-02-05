/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(name) {
  if (!isNaN(Number(name[0]))) return false;
  const aCharCode = "a".charCodeAt();
  const zCharCode = "z".charCodeAt();

  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") return false;
    if (isNaN(Number(name[i]))) {
      const isUnderscore = name[i] === "_";
      const charCode = name[i].toLowerCase().charCodeAt();
      const is_between_A_and_Z = aCharCode <= charCode && charCode <= zCharCode;
      if (!isUnderscore && !is_between_A_and_Z) return false;
    }
  }

  return true;
}
