/*
  O(n^2) time | O(n) space - where n is the number of vertices
*/

function solution(g, s) {
  const numberOfVertices = g.length;
  const distances = new Array(numberOfVertices).fill(Infinity);
  const visited = new Array(numberOfVertices).fill(false);
  distances[s] = 0;

  for (let i = 0; i < numberOfVertices - 1; i++) {
    let minDistances = Infinity;
    let minVertex = -1;

    for (let j = 0; j < numberOfVertices; j++) {
      if (!visited[j] && distances[j] < minDistances) {
        minDistances = distances[j];
        minVertex = j;
      }
    }

    if (minVertex === -1) break;

    visited[minVertex] = true;

    for (let j = 0; j < numberOfVertices; j++) {
      if (
        g[minVertex][j] !== -1 &&
        distances[minVertex] + g[minVertex][j] < distances[j]
      ) {
        distances[j] = distances[minVertex] + g[minVertex][j];
      }
    }
  }

  return distances;
}
