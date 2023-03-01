/*
  O(n) time | O(n) space - where n is the length of the input string
*/

function solution(expr) {
  let weight = 0;
  let maxWeight = 0;
  let maxWeightIndex = 0;

  for (let i = 0; i < expr.length; i++) {
    const char = expr[i];
    let curWeight = 0;

    switch (char) {
      case "(":
        weight += 10;
        break;
      case ")":
        weight -= 10;
        break;
      case "+":
      case "-":
        curWeight = weight + 1;
        break;
      case "*":
      case "/":
        curWeight = weight + 5;
        break;
    }

    if (curWeight > maxWeight) {
      maxWeight = curWeight;
      maxWeightIndex = i;
    }
  }

  return maxWeightIndex;
}
