function solution(matrix) {
  let result = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col]) {
        if (!matrix[row][col - 1]) result++;
        if (!matrix[row][col + 1]) result++;
        if (!matrix[row - 1] || !matrix[row - 1][col]) result++;
        if (!matrix[row + 1] || !matrix[row + 1][col]) result++;
      }
    }
  }

  return result;
}
