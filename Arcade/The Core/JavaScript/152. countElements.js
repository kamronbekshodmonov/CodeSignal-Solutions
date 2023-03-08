/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(inputString) {
  let res = 0;
  let isQuotationMarkOpen = false;

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (isQuotationMarkOpen && char !== `"`) continue;

    if (char === `"`) {
      if (isQuotationMarkOpen === false) res++;
      isQuotationMarkOpen = !isQuotationMarkOpen;
      continue;
    }

    if (char === "t") {
      res++;
      i += 3;
      continue;
    }

    if (char === "f") {
      res++;
      i += 4;
      continue;
    }

    if (isCharacterANumber(char)) {
      while (isCharacterANumber(inputString[i + 1])) i++;
      res++;
    }
  }

  return res;
}

function isCharacterANumber(char) {
  return !Number.isNaN(Number(char)) && char !== " ";
}
