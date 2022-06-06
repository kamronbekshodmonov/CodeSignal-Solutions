/*
  O(n) time | O(n) space - where n is the input legs
*/

function solution(legs) {
  if (legs === 2) return [1];

  const res = [];
  let cat = Math.floor(legs / 4);
  let person = legs % 4 === 0 ? 0 : 1;

  res.push(person);

  while (cat > 0) {
    cat--;
    person += 2;
    res.push(person);
  }

  return res;
}
