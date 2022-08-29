/*
  O(n * m) time | O(n * m) space - where n is the length of the input array and m is the max word length in the input array
*/

function solution(names) {
  const res = [];
  const seenNames = {};

  names.forEach((name) => {
    if (seenNames.hasOwnProperty(name)) {
      let curName = `${name}(${seenNames[name]})`;

      while (seenNames.hasOwnProperty(curName)) {
        seenNames[name]++;
        curName = `${name}(${seenNames[name]})`;
      }

      res.push(curName);

      seenNames[name]++;
      seenNames[res[res.length - 1]] = 1;
    } else {
      res.push(name);
      seenNames[name] = 1;
    }
  });

  return res;
}
