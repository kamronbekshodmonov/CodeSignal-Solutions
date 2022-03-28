/*
  O(nlog(n)) time | O(n) space - where n is the length of the input string
*/

function solution(str, pairs) {
  const res = str.split("");
  const visitedNodes = {};
  const adjacencyList = createAdjacencyList(pairs);

  for (const key in adjacencyList) {
    if (visitedNodes[key]) continue;
    const connectedNodes = getConnectedNodes(adjacencyList, key, visitedNodes);
    sortConnectedNodes(connectedNodes, res);
  }

  return res.join("");
}

function createAdjacencyList(pairs) {
  const res = {};
  for (const pair of pairs) {
    const [first, second] = pair;
    res.hasOwnProperty(first)
      ? res[first].push(second)
      : (res[first] = [second]);
    res.hasOwnProperty(second)
      ? res[second].push(first)
      : (res[second] = [first]);
  }

  return res;
}

function getConnectedNodes(adjacencyList, key, visitedNodes) {
  const res = [Number(key)];
  const nodesToVisit = [...adjacencyList[key]];
  visitedNodes[key] = true;

  while (nodesToVisit.length) {
    const node = nodesToVisit.pop();
    if (visitedNodes.hasOwnProperty(node)) continue;
    nodesToVisit.push(...adjacencyList[node]);
    res.push(node);
    visitedNodes[node] = true;
  }

  return res;
}

function sortConnectedNodes(connectedNodes, arrOfString) {
  const values = [];
  connectedNodes.sort((a, b) => a - b);

  connectedNodes.forEach((el) => {
    values.push(arrOfString[el - 1]);
  });

  values.sort().reverse();
  values.forEach((el, idx) => {
    arrOfString[connectedNodes[idx] - 1] = el;
  });
}
