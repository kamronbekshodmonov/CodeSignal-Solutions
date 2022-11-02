/*
  O(1) time | O(1) space
*/

function solution(x, weekDay, month, yearNumber) {
  const date = new Date(`${yearNumber}-${months[month]}-01`);
  while (date.getDay() !== weekDays[weekDay]) {
    date.setDate(date.getDate() + 1);
  }

  const temp = new Date(date);
  const daysToAdd = (x - 1) * 7;
  date.setDate(date.getDate() + daysToAdd);

  if (temp.getMonth() !== date.getMonth()) return -1;
  return date.getDate();
}

const weekDays = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

const months = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};
