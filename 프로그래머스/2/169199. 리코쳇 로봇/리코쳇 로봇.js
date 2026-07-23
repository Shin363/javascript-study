function solution(board) {
  const height = board.length;
  const width = board[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let startRow = 0;
  let startCol = 0;

  // 시작점 R 찾기
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (board[row][col] === "R") {
        startRow = row;
        startCol = col;
      }
    }
  }

  const visited = Array.from(
    { length: height },
    () => Array(width).fill(false)
  );

  const queue = [[startRow, startCol, 0]];
  visited[startRow][startCol] = true;

  let head = 0;

  while (head < queue.length) {
    const [row, col, count] = queue[head++];

    if (board[row][col] === "G") {
      return count;
    }

    for (const [dr, dc] of directions) {
      let nextRow = row;
      let nextCol = col;

      // 장애물이나 보드 끝을 만날 때까지 이동
      while (true) {
        const movedRow = nextRow + dr;
        const movedCol = nextCol + dc;

        const isOutOfRange =
          movedRow < 0 ||
          movedRow >= height ||
          movedCol < 0 ||
          movedCol >= width;

        if (isOutOfRange || board[movedRow][movedCol] === "D") {
          break;
        }

        nextRow = movedRow;
        nextCol = movedCol;
      }

      // 해당 방향으로 움직여도 현재 위치라면 무시
      if (nextRow === row && nextCol === col) {
        continue;
      }

      // 정지 위치를 방문한 적이 없다면 큐에 추가
      if (!visited[nextRow][nextCol]) {
        visited[nextRow][nextCol] = true;
        queue.push([nextRow, nextCol, count + 1]);
      }
    }
  }

  return -1;
}