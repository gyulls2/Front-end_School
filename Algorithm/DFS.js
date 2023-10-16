// DFS(깊이 우선 탐색)
// 가능한 깊게 그래프나 트리는 탐색하는 방법
// 시작 노드에서 가능한 깊숙이 탐색한 후, 더 이상 방문할 노드가 없으면 이전 노드로 돌아와 다른 경로를 탐색하는 방식으로 작동
// 스택 자료구조 활용

// 스택을 사용한 DFS
function DFS(graph, start) {
  const visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    const current = stack.pop();
    // 현재 노드가 방문한 목록에 없으면
    if (visited.indexOf(current) === -1) {
      visited.push(current);

      // 방문한 적 없는 노드들만 필터한다.
      const neighbors = graph[current].filter((n) => visited.indexOf(n) === -1);
      stack = stack.concat(neighbors);
    }
  }
  return visited;
}


const graph = {
  0: [1, 2, 3],
  1: [4, 5],
  2: [],
  3: [],
  4: [6],
  5: [],
  6: [],
};

console.log(DFS(graph, 0))