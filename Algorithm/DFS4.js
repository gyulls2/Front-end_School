// 특정 값을 찾았을때 탐색한 횟수를 리턴하도록 해보세요.

const tree = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
  [1, 5],
  [4, 6],
];

// 아래 함수를 변경해주세요
function DFS(tree, start, target) {
  const graph = convert(tree);
  let visited = [];
  let stack = [start];
  let count = 0;

  while (stack.length !== 0) {
    let current = stack.pop();
    if (visited.indexOf(current) === -1) {
      visited.push(current);
      count++;

      if (current === target) {
        return current;
      }
      let neighbors = graph[current].filter((n) => visited.indexOf(n) === -1);
      stack = stack.concat(neighbors);
    }
  }
  return count;
}

console.log(DFS(tree, 0, 7));

function convert(tree = []) {
  const graph = {};

  tree.forEach((nodeInfo) => {
    graph[nodeInfo[0]] = [];
    graph[nodeInfo[1]] = [];
  });

  tree.forEach((nodeInfo) => {
    graph[nodeInfo[0]].push(nodeInfo[1]);
  });

  return graph;
}
