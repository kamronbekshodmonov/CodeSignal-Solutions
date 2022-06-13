/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(a, b) {
  let isSwappedFirstTime = false;
  let isSwappedSecondTime = false;
  let swappedFromA;
  let swappedFromB;

  for (let i = 0; i < a.length; i++) {
    const charA = a[i];
    const charB = b[i];

    if (charA !== charB) {
      if (!isSwappedFirstTime) {
        isSwappedFirstTime = true;
        swappedFromA = charA;
        swappedFromB = charB;
      } else {
        if (isSwappedSecondTime) return false;
        isSwappedSecondTime = true;

        if (charB !== swappedFromA || charA !== swappedFromB) {
          return false;
        }
      }
    }
  }

  return true;
}
