/*
  O(n^2) time | O(n^2) space - where n is the input cities
*/

function solution(cities, roads) {
  const res = [];
  const adjacencyList = createAdjacencyList(roads);

  for (let i = 0; i < cities; i++) {
    const list = adjacencyList[i] || {};
    for (let j = i + 1; j < cities; j++) {
      if (list.hasOwnProperty(j)) continue;
      res.push([i, j]);
    }
  }

  return res;
}

function createAdjacencyList(roads) {
  const adjacencyList = {};
  for (const [node1, node2] of roads) {
    const min = Math.min(node1, node2);
    const max = Math.max(node1, node2);
    if (!adjacencyList.hasOwnProperty(min)) adjacencyList[min] = {};
    adjacencyList[min][max] = true;
  }

  return adjacencyList;
}
