/*
  O(1) time | O(1) space
*/

function solution(time) {
  const [hour, minut] = time.split(":");
  if (!(0 <= Number(hour) && Number(hour) <= 23)) return false;
  if (!(0 <= Number(minut) && Number(minut) <= 59)) return false;
  return true;
}
