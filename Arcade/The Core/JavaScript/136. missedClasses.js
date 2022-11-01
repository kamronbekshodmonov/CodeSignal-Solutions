/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(year, daysOfTheWeek, holidays) {
  let result = 0;
  const holidaysEndDate = new Date(`${year}-09-01`);
  const holidaysStartDate = new Date(`${year}-05-31`);

  for (let i = 0; i < holidays.length; i++) {
    let curDate = new Date(`${year}-${holidays[i]}`);
    if (holidaysStartDate < curDate && curDate < holidaysEndDate) {
      continue;
    }

    if (curDate < holidaysStartDate) {
      curDate.setFullYear(year + 1);
    }

    let dayOfTheWeek = curDate.getDay();
    if (dayOfTheWeek === 0) dayOfTheWeek = 7;
    if (daysOfTheWeek.includes(dayOfTheWeek)) {
      result++;
    }
  }

  return result;
}
