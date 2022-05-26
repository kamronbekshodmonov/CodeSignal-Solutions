/*
  O(min(n, m)) time | O(1) space - where n is the length of the first input string and m is the length of the second input string
*/

function solution(filename1, filename2) {
  const isFirstFilenameSmaller = filename1.length < filename2.length;

  if (isFirstFilenameSmaller) {
    return (
      filename1.toUpperCase() < filename2 && filename1.toLowerCase() > filename2
    );
  }

  return (
    filename1 > filename2.toUpperCase() && filename1 < filename2.toLowerCase()
  );
}
