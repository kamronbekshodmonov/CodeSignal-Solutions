/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(st) {
  let startIndex = 0;
  let endIndex = st.length - 1;

  firstLoop: while (startIndex < endIndex) {
    let potentialStartIndex = startIndex;
    while (st[startIndex] === st[endIndex]) {
      startIndex++;
      endIndex--;
      if (startIndex >= endIndex) {
        startIndex = potentialStartIndex;
        break firstLoop;
      }
    }

    endIndex = st.length - 1;
    if (potentialStartIndex === startIndex) startIndex++;
  }

  startIndex--;

  const res = [];
  for (let i = startIndex; i >= 0; i--) {
    res.push(st[i]);
  }

  return st + res.join("");
}
