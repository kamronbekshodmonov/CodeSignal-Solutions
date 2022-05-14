/*
  O(n) time | O(1) space - where n is the input numberOfDigits
*/

function solution(current, numberOfDigits) {
  first: while (numberOfDigits > 0) {
    let curCurrent = current;
    while (curCurrent > 0) {
      if (numberOfDigits === 0) break first;
      curCurrent = (curCurrent - (curCurrent % 10)) / 10;
      numberOfDigits--;
    }

    current++;
  }

  return current - 1;
}
