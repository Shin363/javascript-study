function isFile(c){
    return (c==='#'?1:0);
}
function solution(wallpaper) {
    var answer = [];
    let [lux,luy,rdx,rdy]=[0,0,0,0];
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[i].length; j++){
            //처음 파일 발견 시 시작점과 끝점 초기화
            if(isFile(wallpaper[i][j])&&lux===0&&luy===0&&rdx===0&&rdy===0){
                lux=i;luy=j;rdx=lux+1;rdy=luy+1;
            }
            //파일의 시작점과 끝점 업데이트
            else if(isFile(wallpaper[i][j])){
                lux>i?lux=i:0;
                luy>j?luy=j:0;
                rdx<i+1?rdx=i+1:0;
                rdy<j+1?rdy=j+1:0;
            }
        }
    }
    answer=[lux,luy,rdx,rdy];
    return answer;
}