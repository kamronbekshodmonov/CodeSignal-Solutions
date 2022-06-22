/*
  O(n) time | O(1) space - where n is the length of the input test string
*/

function solution(pattern, test) {
  if (pattern.length - 1 > test.length) return false;

  if (pattern[0] === "^") {
    return pattern.substr(1) === test.substr(0, pattern.length - 1);
  } else if (pattern[pattern.length - 1] === "$") {
    return (
      pattern.substr(0, pattern.length - 1) ===
      test.substr(test.length - (pattern.length - 1))
    );
  }

  let testCharCodeSum = 0;
  let patternCharCodeSum = 0;

  for (let i = 0; i < pattern.length; i++) {
    testCharCodeSum += test[i].charCodeAt(0);
    patternCharCodeSum += pattern[i].charCodeAt(0);
  }

  if (
    testCharCodeSum === patternCharCodeSum &&
    areSameStrings(pattern, test, 0)
  )
    return true;

  for (let i = pattern.length; i < test.length; i++) {
    testCharCodeSum += test[i].charCodeAt(0);
    testCharCodeSum -= test[i - pattern.length].charCodeAt(0);
    if (
      testCharCodeSum === patternCharCodeSum &&
      areSameStrings(pattern, test, i - (pattern.length - 1))
    )
      return true;
  }

  return false;
}

function areSameStrings(str1, str2, str2StartIndex) {
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[str2StartIndex + i]) return false;
  }

  return true;
}
