/*
  O(n) time | O(1) space - where n is the length of the input string
*/

function solution(commands) {
  let res = 0;
  let allStudents = 0;
  let leftRightStudent = 0;

  for (const command of commands) {
    switch (command) {
      case "L":
        allStudents++;
        leftRightStudent += 3;
        break;
      case "R":
        allStudents += 3;
        leftRightStudent += 1;
        break;
      default:
        allStudents += 2;
        leftRightStudent += 2;
    }

    if (allStudents % 4 === leftRightStudent % 4) res++;
  }

  return res;
}
