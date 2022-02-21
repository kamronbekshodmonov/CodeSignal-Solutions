/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(text) {
  let allEnglishLetters = {};
  let englishLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (const char of englishLetters) allEnglishLetters[char] = true;

  let longestWord = [];
  let curLongestWord = [];
  for (let i = 0; i < text.length + 1; i++) {
    if (text[i] in allEnglishLetters) {
      curLongestWord.push(text[i]);
    } else {
      if (curLongestWord.length > longestWord.length)
        longestWord = curLongestWord;
      curLongestWord = [];
    }
  }

  return longestWord.join("");
}
