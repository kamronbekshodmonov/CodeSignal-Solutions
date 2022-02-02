/*
  O(n) time | O(p) space - where n is the total number of elements in the array and p are the pixels
*/

function solution(image) {
  const res = [];
  let colSum;
  let sum = image[0][0] + image[0][1] + image[1][0] + image[1][1];

  for (let row = 2; row < image.length; row++) {
    res.push([]);
    if (row >= 3) sum = sum - (image[row - 3][0] + image[row - 3][1]);
    sum += image[row][0] + image[row][1];
    colSum = sum;

    for (let col = 2; col < image[0].length; col++) {
      if (col >= 3)
        colSum =
          colSum -
          (image[row - 2][col - 3] +
            image[row - 1][col - 3] +
            image[row - 0][col - 3]);
      colSum += image[row - 2][col] + image[row - 1][col] + image[row][col];
      res[res.length - 1].push(Math.floor(colSum / 9));
    }
  }

  return res;
}
