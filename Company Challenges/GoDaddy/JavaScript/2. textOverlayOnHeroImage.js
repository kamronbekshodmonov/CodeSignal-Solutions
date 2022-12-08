/*
  O(n) time | O(1) space - where n is the total number of elements in the array
*/

function solution(image, height, width) {
  var columnSum = function (x, y1, y2) {
    var result = 0;
    for (var y = y1; y < y2; y++) {
      result += image[y][x];
    }
    return result;
  };

  var rowSum = function (y, x1, x2) {
    var result = 0;
    for (var x = x1; x < x2; x++) {
      result += image[y][x];
    }
    return result;
  };

  var bestSum = -1;
  var bestPos = [];
  var sum = 0;
  var lastRowLeftmostSum = 0;

  for (var i = 0; i + height <= image.length; i++) {
    for (var j = 0; j + width <= image[0].length; j++) {
      if (!i && !j) {
        for (var y = 0; y < height; y++) {
          sum += rowSum(y, 0, width);
        }
        lastRowLeftmostSum = sum;
      } else if (!j) {
        lastRowLeftmostSum -= rowSum(i - 1, 0, width);
        lastRowLeftmostSum += rowSum(i - 1 + height, 0, width);
        sum = lastRowLeftmostSum;
      } else {
        sum =
          sum -
          columnSum(j - 1, i, i + height) +
          columnSum(j + width - 1, i, i + height);
      }
      if (sum > bestSum) {
        bestSum = sum;
        bestPos = [i, j];
      }
    }
  }

  return bestPos;
}
