function solution(park, routes) {
    //park에서 출발지 찾기
    var departs = [];
    for(let i=0; i<park.length; i++){
        for(let j=0; j<park[0].length; j++){
            if(park[i][j]==='S')
                departs = [i,j];
        }
    }
    //routes의 방향(op)으로 거리(n)만큼 이동
    for(let i=0; i<routes.length; i++){
        let [op,n] = routes[i].split(" ");
        let [startX, startY] = departs;
        for(let j=0; j<n; j++){
            switch(op){
                case 'N':
                    departs[0]--;
                    break;
                case 'S':
                    departs[0]++;
                    break;
                case 'W':
                    departs[1]--;
                    break;
                case 'E':
                    departs[1]++;
                    break;
            }
            //범위를 초과하거나 X장애물을 만났을 때 백업해놓은 곳으로 되돌아가기
            if (departs[0] < 0 || departs[0] >= park.length || departs[1] < 0 || 
                departs[1] >= park[0].length || park[departs[0]][departs[1]] ===
                "X") {
                departs=[startX,startY];
                break;
            }
        }
    }
    return departs;
}
