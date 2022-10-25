/*
  O(1) time | O(1) space
*/

function solution(birthdayDate) {
  const weekday = new Date(birthdayDate).getDay();
  const [month, day, year] = birthdayDate
    .split("-")
    .map((value) => Number(value));
  let yearsPassed = 0;
  let curWeekday = new Date(birthdayDate).getDay();

  do {
    if (month === 2 && day === 29) {
      yearsPassed += 4;
      const curYear = year + yearsPassed;
      if (curYear % 100 === 0 && curYear % 400 !== 0) yearsPassed += 4;
    } else {
      yearsPassed++;
    }

    const date = `${month}-${day}-${year + yearsPassed}`;
    curWeekday = new Date(date).getDay();
  } while (weekday !== curWeekday);

  return yearsPassed;
}
