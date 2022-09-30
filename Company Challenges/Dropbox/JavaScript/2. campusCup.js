/*
  O(n * mlog(m)) time | O(k) space - where n is the length of the input array, m is the max word length in the input array and k is the total number of elements in the array
*/

function solution(emails) {
  const schools = new Map();

  for (const email of emails) {
    const emailSplit = email.split("@");
    const school = emailSplit[emailSplit.length - 1];
    const schoolPoint = schools.get(school) || 0;
    schools.set(school, schoolPoint + 20);
  }

  const result = [];
  const schoolsByPoint = [[], [], [], [], []];
  schools.forEach((value, key) => {
    if (value >= 500) {
      schoolsByPoint[0].push(key);
    } else if (value >= 300) {
      schoolsByPoint[1].push(key);
    } else if (value >= 200) {
      schoolsByPoint[2].push(key);
    } else if (value >= 100) {
      schoolsByPoint[3].push(key);
    } else {
      schoolsByPoint[4].push(key);
    }
  });

  schoolsByPoint.forEach((group) => result.push(...group.sort()));
  return result;
}
