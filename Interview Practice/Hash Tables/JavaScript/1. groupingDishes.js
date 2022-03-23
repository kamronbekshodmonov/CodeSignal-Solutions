/*
  O(nlog(n)) time | O(n) space - where n is the total number of elements in the array
*/

function solution(dishes) {
  const ingredients = {};

  for (const dish of dishes) {
    for (let i = 1; i < dish.length; i++) {
      if (ingredients.hasOwnProperty(dish[i])) {
        ingredients[dish[i]].push(dish[0]);
      } else {
        ingredients[dish[i]] = [dish[0]];
      }
    }
  }

  const res = [];
  for (const key in ingredients) {
    if (ingredients[key].length >= 2) {
      res.push([key, ...ingredients[key].sort()]);
    }
  }

  res.sort((a, b) => {
    let idx = 0;
    while (idx < a.length || idx < b.length) {
      if (a[idx] < b[idx] || !a[idx]) return -1;
      if (a[idx] > b[idx] || !b[idx]) return 1;
      idx++;
    }
    return 0;
  });
  return res;
}
