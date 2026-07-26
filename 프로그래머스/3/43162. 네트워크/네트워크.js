function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false);

  function dfs(computer) {
    visited[computer] = true;

    for (let next = 0; next < n; next++) {
      // 현재 컴퓨터와 연결되어 있고, 아직 방문하지 않았다면 탐색
      if (computers[computer][next] === 1 && !visited[next]) {
        dfs(next);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    // 아직 방문하지 않은 컴퓨터라면 새로운 네트워크
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}