/*
  O(1) time | O(1) space
*/

function solution(n) {
  let sum = 0;
  let hour = String(Math.floor(n / 60));
  let minut = String(n - Math.floor(n / 60) * 60);
  sum += (Number(hour[0]) || 0) + (Number(hour[1]) || 0);
  sum += (Number(minut[0]) || 0) + (Number(minut[1]) || 0);

  return sum;
}
