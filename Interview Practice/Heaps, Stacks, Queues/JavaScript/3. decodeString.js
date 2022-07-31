/*
  O(n) time | O(n) space - where n is the length of the decoded string
*/

function solution(s) {
  const [_, decodedString] = decodeString(1, 0, s);
  return decodedString;
}

function decodeString(amount, index, string) {
  const stack = [];

  while (index < string.length) {
    const char = string[index];
    index++;

    if (char === "]") break;

    if (char !== "[") {
      stack.push(char);
    } else {
      let nextAmount = 0;
      let multiplyTo = 1;
      let decodedString = "";
      while (!isNaN(Number(stack[stack.length - 1]))) {
        nextAmount += Number(stack.pop()) * multiplyTo;
        multiplyTo *= 10;
      }

      [index, decodedString] = decodeString(nextAmount, index, string);
      stack.push(decodedString);
    }
  }

  return [index, new Array(amount).fill(stack.join("")).join("")];
}
