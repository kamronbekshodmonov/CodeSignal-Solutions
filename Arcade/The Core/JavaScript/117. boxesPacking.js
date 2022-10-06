/*
  O(nlog(n)) time | O(n) space - where n is the length of the input array
*/

function solution(length, width, height) {
  const boxes = [];
  for (let i = 0; i < length.length; i++) {
    const box = [length[i], width[i], height[i]];
    box.sort((a, b) => b - a);
    boxes.push(box);
  }

  boxes.sort((a, b) => b[0] - a[0]);

  for (let i = 1; i < boxes.length; i++) {
    if (boxes[i][0] >= boxes[i - 1][0]) return false;
    if (boxes[i][1] >= boxes[i - 1][1]) return false;
    if (boxes[i][2] >= boxes[i - 1][2]) return false;
  }

  return true;
}
