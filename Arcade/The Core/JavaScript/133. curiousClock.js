/*
  O(1) time | O(1) space
*/

function solution(someTime, leavingTime) {
  const parsedSomeTime = Date.parse(someTime);
  const parsedLeavingTime = Date.parse(leavingTime);
  const reversedLeavingTime = new Date(
    parsedSomeTime - (parsedLeavingTime - parsedSomeTime)
  );
  return formatDate(reversedLeavingTime);
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes())].join(":")
  );
}
