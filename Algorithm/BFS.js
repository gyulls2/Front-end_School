// BFS (너비 우선 탐색)
// 시작 노드에서 인접한 노드를 먼저 모두 탐색한 후에
// 그 다음 레벨의 노드들을 탐색하는 방법
// 큐 자료구조 활용

// 0. 아래 과정 반복
// 0-1. 방문할 노드 없으면 종료
// 1. 시작노드 방문
// 1-2. 큐에 시작 노드가 있어야 방문 가능
// 2. 시작 노드를 기존으로 인접노드를 ㅠ에 넣는다.
// 2-1. 방문한 시작노드를 방문한 목록에 넣는다.
// 3. 큐에 있는 노드 하나를 꺼낸다.
// 3-1. 꺼낸 노드가 방문한 노드인지 확인한다.
// 4. 꺼낸 노드의 인접 노드를 큐에 넣는다.
// 4-1. 방문한 노드를 방문한 목록에 넣는다.

function bfs(graph, start) {
  const visited = []; // 방문한 노드들을 넣을 곳
  let queue = [start]; // 방문할 노드들을 쌇아두는 곳

  while (queue.length !== 0) {
    const current = queue.shift(); // 방문할 노드목록에서 나하 꺼내고 노드에 방문
    // isited.indexOf(current)이 -1이면 방문하지 않은 노드
    if (visited.indexOf(current) === -1) {
      visited.push(current);
      // 방문하지 않은 인접노드들만 가져오기
      const neighbors = graph[current].filter((n) => visited.indexOf(n) === -1);
      // 큐에 인접노드 추가하기
      queue = queue.concat(neighbors);
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

console.log(bfs(graph, 0));

function bfs1(graph, start, target) {
  const visited = []; // 방문한 노드들을 넣을 곳
  let queue = [start]; // 방문할 노드들을 쌇아두는 곳

  while (queue.length !== 0) {
    const current = queue.shift(); // 방문할 노드목록에서 꺼내고 노드에 방문
    // visited.indexOf(current)이 -1이면 방문하지 않은 노드
    if (visited.indexOf(current) === -1) {
      if (current === target) {
        return "있습니다.";
      }
      visited.push(current);
      // 방문하지 않은 인접노드들만 가져오기
      const neighbors = graph[current].filter((n) => visited.indexOf(n) === -1);
      // 큐에 인접노드 추가하기
      queue = queue.concat(neighbors);
    }
  }
  return -1;
}

console.log(bfs1(graph, 0, 7));
console.log(bfs1(graph, 0, 5));

function bfs2(graph, start, target) {
  const visited = []; // 방문한 노드들을 넣을 곳
  let queue = [start]; // 방문할 노드들을 쌇아두는 곳\
  let count = 0; // 탐색한 횟수

  while (queue.length !== 0) {
    const current = queue.shift(); // 방문할 노드목록에서 나하 꺼내고 노드에 방문
    // isited.indexOf(current)이 -1이면 방문하지 않은 노드
    if (visited.indexOf(current) === -1) {
      visited.push(current);
      count++;

      if (current === target) {
        return count;
      }

      // 방문하지 않은 인접노드들만 가져오기
      const neighbors = graph[current].filter((n) => visited.indexOf(n) === -1);
      // 큐에 인접노드 추가하기
      queue = queue.concat(neighbors);
    }
  }
  return count;
}

console.log(bfs2(graph, 0, 10));
console.log(bfs2(graph, 0, 6));
