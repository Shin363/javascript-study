function solution(land) {
    let answer=0;
   for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
        let maxPrev = 0;
        for (let k = 0; k < 4; k++) {
            if (j !== k) {  // 같은 열이 아닐 때만 최댓값 계산
                maxPrev = Math.max(maxPrev, land[i - 1][k]);
            }
        }
        land[i][j] += maxPrev;  // 현재 값에 이전 최댓값을 더함
    }
}
return Math.max(...land[land.length-1]);
}