/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(inputString) {
  const res = [];
  for (const char of inputString) {
    const curCharCode = char.charCodeAt();
    if (curCharCode === "z".charCodeAt()) res.push("a");
    if (curCharCode === "Z".charCodeAt()) res.push("A");
    const is_between_a_and_z =
      "a".charCodeAt() <= curCharCode && curCharCode < "z".charCodeAt();
    const is_between_A_and_Z =
      "A".charCodeAt() <= curCharCode && curCharCode < "Z".charCodeAt();
    if (is_between_a_and_z || is_between_A_and_Z) {
      res.push(String.fromCharCode(curCharCode + 1));
    }
  }

  return res.join("");
}
