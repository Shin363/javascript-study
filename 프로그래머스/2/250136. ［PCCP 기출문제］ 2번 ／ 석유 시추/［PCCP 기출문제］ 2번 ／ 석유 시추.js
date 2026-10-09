function solution(land) {
    const n = land.length; const m = land[0].length;
    const visited = Array.from({length:n},()=> new Array(m).fill(0));
    const oil = new Array(m).fill(0);
    let answer;
    
    // 스택 사용해서 깊이 탐색: row와 col로 시작좌표를 받고, 연결된 칸을 다 돌고 크기와 걸친 열들을 반환, {sizes, cols}
    function DFS(r,c){
        const stacks = [[r,c]];
        visited[r][c]=1;
        let size = 0;
        const cols = new Set();
        
        const dr = [-1,1,0,0];
        const dc = [0,0,-1,1];
        
        while(stacks.length>0){
            const [cr,cc]=stacks.pop();
            //1. 크기 늘리기
            size++;
            //2. 해당 칸의 열을 cols에 추가
            cols.add(cc);
            for(let i=0; i<4; i++){
                //3. 상하좌우 보면서 넣어도 되는 칸이면 방문 표시 후 스택에 푸시
                const nr = cr + dr[i];
                const nc = cc + dc[i];
                //범위 밖이면 건너뛰기
                if(nr<0||nr>=n||nc<0||nc>=m) continue;
                //석유가 아니거나 이미 방문했으면 건너뛰기
                else if(land[nr][nc]===0||visited[nr][nc]===1) continue;
                //방문 표시하고 스택에 푸시
                else{
                    visited[nr][nc]=1;
                    stacks.push([nr,nc]);
                }
            }
        }
        return { size, cols };
    }
    
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(land[i][j]===1 && visited[i][j]===0){
                // console.log(DFS(i,j));
                const {size,cols} = DFS(i,j);
                for(const c of cols){
                    oil[c]+=size;
                }
            }
        }
    }
    answer = Math.max(...oil)
    return answer;
}

