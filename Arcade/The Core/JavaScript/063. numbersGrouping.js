/*
  O(n) time | O(n) space - where n is the length of the input array
*/

function solution(a) {
  let res = 0;
  const addedGroups = {};

  for (let num of a) {
    let group = Math.floor(num / 10000);
    if (group * 10000 === num) group--;
    if (!addedGroups.hasOwnProperty(group)) res++;
    addedGroups[group] = true;
  }

  return res + a.length;
}
