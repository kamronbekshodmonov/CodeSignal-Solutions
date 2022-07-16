/*
  O(n^2) time | O(n) space - where n is the total number of elements in the array
*/

function solution(n, tree) {
  const nodes = {};

  for (let edge of tree) {
    const [v1, v2] = edge;
    if (!nodes[v1]) nodes[v1] = [];
    if (!nodes[v2]) nodes[v2] = [];

    nodes[v1].push(v2);
    nodes[v2].push(v1);
  }

  let result = 0;
  for (let key in Object.keys(nodes)) {
    if (nodes[+key].length !== 1) continue;

    result = Math.max(result, maxPath(nodes, +key, null));
  }

  return result;
}

function maxPath(nodes, node, parent) {
  let result = 0;

  for (let sibling of nodes[node]) {
    if (sibling === parent) continue;

    result = Math.max(result, maxPath(nodes, sibling, node) + 1);
  }

  return result;
}
