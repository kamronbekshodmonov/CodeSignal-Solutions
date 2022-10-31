/*
  O(1) time | O(1) space
*/

function solution(currMonth) {
  let [month, year] = currMonth.split("-").map((value) => Number(value));

  do {
    month++;
    if (month === 13) {
      year++;
      month = 1;
    }
  } while (new Date(`${year}-${month}-01`).getDay() !== 1);

  return `${String(month).padStart(2, 0)}-${year}`;
}
