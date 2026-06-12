// 문제의 키포인트 : 이미 갔던 길은 표시x, Set 활용하기, 음수인 경우는 제외하고 생각하기 위해서 정중앙 좌표값을 (5,5)로 설정하기
function isValid(x,y){
    return x>=-5&&x<=5&&y>=-5&&y<=5;
}
// 명령어에 따라 좌표가 바뀌는 함수
function moveXY(x,y,dir){
    switch(dir){
        case "U":
            return [x,y+1];
        case "D":
            return [x,y-1];
        case "R":
            return [x+1,y];
        case "L":
            return [x-1,y];
    }
}

function solution(dirs) {
    let x = 0;
    let y = 0;
    
    const visited = new Set();
    for(const dir of dirs){
        const [nx,ny] = moveXY(x,y,dir);
        if(!isValid(nx,ny)){
            continue; //유효하지 않은 범위는 인정하지 않음
        }
        
        visited.add(`${x}${y}${nx}${ny}`);
        visited.add(`${nx}${ny}${x}${y}`);
        
        [x,y]=[nx,ny]; //좌표 이동
    }
    
    return visited.size/2;
}