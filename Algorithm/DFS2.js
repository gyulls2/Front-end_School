// 재귀를 사용한 DFS
const graph = {
  0: [1, 2, 3],
  1: [4, 5],
  2: [],
  3: [],
  4: [6],
  5: [],
  6: [],
};
function DFS(graph, node, visited = []) {
  if (visited.indexOf(node) === -1) {
    visited.push(node);
    // 첫번재 함수호출에서 visited에 [0]이들어간다
    for (let neighbor of graph[node]) {
      // 각각 0에 있는 1,2,3이 순차적으로 실행됨 visited는 [0]
      // DFS(graph, 1, [0])
      // DFS(graph, 2, [0,1,4,6,5])
      // DFS(graph, 3, [0,1,4,6,5,2]) 이렇게 들어가게됨!
      DFS(graph, neighbor, visited);
    }
  }
  return visited;
}

const result = DFS(graph, 0);
console.log(result); // //[0, 1, 4, 6, 5, 2, 3]
