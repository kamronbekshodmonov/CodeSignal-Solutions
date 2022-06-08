/*
  O(n) time | O(1) space - where n is the input coins
*/

function solution(coins, price) {
  let res = 0;
  let coinIndex = coins.length - 1;
  let remainingPrice = price;

  while (remainingPrice > 0) {
    const coin = coins[coinIndex];
    if (coin > remainingPrice) {
      coinIndex--;
      continue;
    }

    coinIndex--;
    res += Math.floor(remainingPrice / coin);
    remainingPrice -= coin * Math.floor(remainingPrice / coin);
  }

  return res;
}
