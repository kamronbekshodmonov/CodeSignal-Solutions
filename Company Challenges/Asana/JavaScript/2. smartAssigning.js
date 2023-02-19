/*
  O(n) time | O(1) space - where n is the length of the input array
*/

function solution(names, statuses, projects, tasks) {
  let highestAvailableIndex = -1;

  for (let i = 0; i < names.length; i++) {
    if (statuses[i]) continue;
    if (tasks[i] > tasks[highestAvailableIndex]) continue;
    if (
      tasks[i] === tasks[highestAvailableIndex] &&
      projects[i] > projects[highestAvailableIndex]
    ) {
      continue;
    }

    highestAvailableIndex = i;
  }

  return names[highestAvailableIndex];
}
