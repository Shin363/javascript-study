function solution(k, dungeons) {
  let answer = 0;

  const visited = Array(dungeons.length).fill(false);

  function dfs(currentFatigue, count) {
    answer = Math.max(answer, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [requiredFatigue, consumedFatigue] = dungeons[i];

      // 이미 방문한 던전이면 건너뛰기
      if (visited[i]) continue;

      // 현재 피로도가 최소 필요 피로도보다 작으면 입장 불가능
      if (currentFatigue < requiredFatigue) continue;

      // 던전 선택
      visited[i] = true;

      dfs(
        currentFatigue - consumedFatigue,
        count + 1
      );

      // 던전 선택 취소
      visited[i] = false;
    }
  }

  dfs(k, 0);

  return answer;
}