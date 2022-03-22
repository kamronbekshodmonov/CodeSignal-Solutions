/*
  O(n) time | O(s) space - where n is the total number of elements in the crypt array and s is the length of the solution array
*/

function solution(crypt, solution) {
  const values = {};
  for (const curSolution of solution) {
    values[curSolution[0]] = curSolution[1];
  }

  const firstVal = convert(crypt[0], values);
  const secondVal = convert(crypt[1], values);
  const thirdVal = convert(crypt[2], values);

  if (firstVal === null || secondVal === null || thirdVal === null)
    return false;
  return firstVal + secondVal === thirdVal;
}

function convert(word, values) {
  if (Number(values[word[0]]) === 0 && word.length > 1) return null;

  let res = 0;
  for (let i = 0; i < word.length; i++) {
    res *= 10;
    res += Number(values[word[i]]);
  }

  return res;
}
