/*
  O(n * m^2) time | O(n) space - where n is the length of the input array and m is the input k
*/

function solution(divisors, k) {
  const formedClan = {};
  let numberOfClans = 0;

  firstLoop: for (let i = 1; i <= k; i++) {
    secondLoop: for (let j = i + 1; j <= k; j++) {
      for (const divisor of divisors) {
        const is_i_divisible = i / divisor === Math.floor(i / divisor);
        const is_j_divisible = j / divisor === Math.floor(j / divisor);
        const isBothDivisible = is_i_divisible && is_j_divisible;
        const isBothNotDivisible = !is_i_divisible && !is_j_divisible;
        const areFriends = isBothDivisible || isBothNotDivisible;

        if (!areFriends) continue secondLoop;
      }

      if (!formedClan.hasOwnProperty(i) && !formedClan.hasOwnProperty(j))
        numberOfClans++;
      formedClan[i] = true;
      formedClan[j] = true;
      continue firstLoop;
    }

    if (!formedClan.hasOwnProperty(i)) numberOfClans++;
  }

  return numberOfClans;
}
