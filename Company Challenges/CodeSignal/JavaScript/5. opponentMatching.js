/*
  O(n^2) time | O(n) space - where n is the length of the input array
*/

function solution(xp) {
  if (xp.length === 1) return [];
  if (xp.length === 2) return [[0, 1]];

  const result = [];
  const usersIndex = new Map();

  xp.forEach((user, index) => {
    if (usersIndex.has(user)) {
      result.push([usersIndex.get(user), index]);
      usersIndex.delete(user);
    } else {
      usersIndex.set(user, index);
    }
  });

  let users = [...usersIndex.keys()];
  while (users.length > 1) {
    let value1 = users[0];
    let value2 = users[1];
    for (let i = 0; i < users.length; i++) {
      for (let j = i + 1; j < users.length; j++) {
        if (Math.abs(value1 - value2) > Math.abs(users[i] - users[j])) {
          value1 = users[i];
          value2 = users[j];
        }
      }
    }

    result.push([usersIndex.get(value1), usersIndex.get(value2)]);
    users = users.filter((user) => user !== value1 && user !== value2);
  }

  return result;
}
