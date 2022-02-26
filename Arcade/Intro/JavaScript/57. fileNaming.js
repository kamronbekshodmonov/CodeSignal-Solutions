/*
  O(n) time | O(n) space - where n is the input array
*/

function solution(names) {
  const res = [];
  const seenNames = {};

  for (const name of names) {
    let curName = name;
    if (seenNames.hasOwnProperty(name)) {
      let index = 1;
      while (seenNames.hasOwnProperty(`${name}(${index})`)) {
        index++;
      }
      curName = `${name}(${index})`;
    }

    seenNames[curName] = true;
    res.push(curName);
  }

  return res;
}
