/*
  O(n * m) time | O(1) space - where n is the length of the first input string and m is the length of the second input string
*/

function solution(s, t) {
  let len;
  let power;
  let map;
  let hash;
  let i;
  let l1;
  let found;
  let P = 997;
  let M = 1e9 + 7;
  let l = 1;
  let r = Math.min(s.length, t.length);
  let result = 0;

  while (l <= r) {
    len = ((l + r) / 2) | 0;
    power = 1;

    for (i = 1; i < len; i++) {
      power = (power * P) % M;
    }

    map = {};
    hash = 0;

    l1 = s.length - len;

    for (i = -len + 1; i <= l1; i++) {
      hash = (hash * P + s.charCodeAt(i + len - 1)) % M;
      if (i >= 0) {
        map[hash] = i;
        hash = (((hash - s.charCodeAt(i) * power) % M) + M) % M;
      }
    }

    found = false;
    hash = 0;

    l1 = t.length - len;

    for (i = -len + 1; i <= l1; i++) {
      hash = (hash * P + t.charCodeAt(i + len - 1)) % M;
      if (i >= 0) {
        if (map[hash] >= 0 && s.substr(map[hash], len) === t.substr(i, len)) {
          found = true;
          break;
        }
        hash = (((hash - t.charCodeAt(i) * power) % M) + M) % M;
      }
    }

    if (found) {
      result = len;
      l = len + 1;
    } else {
      r = len - 1;
    }
  }

  return result;
}
