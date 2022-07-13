/*
  O(n) time | O(m) space - where n is the length of the input array and m is the unique number of size in the input array
*/

function solution(shoes) {
  const seenShoes = {};

  for (const [type, size] of shoes) {
    if (!seenShoes.hasOwnProperty(size)) {
      seenShoes[size] = [0, 0];
    }

    seenShoes[size][type]++;
  }

  for (const size in seenShoes) {
    if (seenShoes[size][0] !== seenShoes[size][1]) return false;
  }

  return true;
}
