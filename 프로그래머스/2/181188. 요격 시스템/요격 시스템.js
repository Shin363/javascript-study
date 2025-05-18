function solution(targets) {
    var answer = 0;
    targets.sort((a,b)=>a[1]-b[1]);
    let lastShot = -1;
    for(let [start,end] of targets){
        if(start>=lastShot){
            lastShot=end;
            answer++;
        }
    }
    return answer;
}