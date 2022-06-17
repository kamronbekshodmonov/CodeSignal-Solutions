/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(symbol) {
  const convertedSymbol = Number(symbol);

  if (symbol === "" || isNaN(convertedSymbol)) return "not a digit";
  if (convertedSymbol % 2 === 0) return "even";
  return "odd";
}
