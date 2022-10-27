/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(takeOffTime, minutes) {
  let result = 0;
  let overDay = false;
  let [hour, minute] = getTime(takeOffTime);

  if (hour === 0) hour = 24;

  for (let i = 0; i < minutes.length; i++) {
    const prev = minutes[i - 1] || 0;
    minute += minutes[i] - prev;

    if (minute >= 60) {
      hour += Math.floor(minute / 60);
      minute = minute % 60;
    }

    if (hour >= 24) overDay = true;
    if (overDay) result++;

    hour -= 1;
    if (hour > 24 || (hour === 24 && minute !== 0)) return result;
    if (hour < 24 || (hour === 24 && minute === 0)) {
      overDay = false;
    }
  }

  if (!overDay) result++;
  return result;
}

function getTime(time) {
  return time.split(":").map((value) => Number(value));
}
