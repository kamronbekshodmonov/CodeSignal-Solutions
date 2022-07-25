/*
  O(m * n!) time | O(m * n) space - where n is the length of the coins array and m is the max number in quantity array
*/

function solution(coins, quantity) {
  return recursiveHelper(coins, quantity);
}

function recursiveHelper(
  coins,
  quantity,
  sums = {},
  startIndex = 0,
  prevSum = 0
) {
  let res = 0;
  for (let i = startIndex; i < coins.length; i++) {
    let curSum = 0;
    for (let j = 0; j < quantity[i]; j++) {
      curSum += coins[i];

      if (!sums.hasOwnProperty(curSum + prevSum)) {
        res++;
        sums[curSum + prevSum] = true;
      }

      res += recursiveHelper(coins, quantity, sums, i + 1, curSum + prevSum);
    }
  }

  return res;
}
