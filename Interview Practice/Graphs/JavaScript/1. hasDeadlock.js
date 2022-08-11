/*
  O(v + e) time | O(v) space - where v is the number of vertices and e is the number of edges in the graph
*/

function solution(connections) {
  const visited = new Array(connections.length).fill(false);
  const currentlyInStack = new Array(connections.length).fill(false);

  for (let i = 0; i < connections.length; i++) {
    if (visited[i]) continue;
    const isCycleExists = dfsHelper(visited, currentlyInStack, connections, i);
    if (isCycleExists) return true;
  }

  return false;
}

function dfsHelper(visited, currentlyInStack, connections, index) {
  if (currentlyInStack[index]) return true;
  if (visited[index]) return false;

  currentlyInStack[index] = true;
  visited[index] = true;

  for (const curIndex of connections[index]) {
    const isCycleExists = dfsHelper(
      visited,
      currentlyInStack,
      connections,
      curIndex
    );
    if (isCycleExists) return true;
  }

  currentlyInStack[index] = false;
  return false;
}
