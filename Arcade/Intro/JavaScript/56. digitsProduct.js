/*
  O(nlog(n)) time | O(n) space - where n is the output
*/

function solution(product) {
  if (product === 0) return 10;
  if (product < 10) return product;
  let res = [];

  while (product > 1) {
    let curProduct = product;
    for (let i = 9; i >= 2; i--) {
      if (product % i === 0) {
        res.push(String(i));
        product /= i;
        break;
      }
    }

    if (curProduct === product) return -1;
  }

  return Number(res.sort().join(""));
}
