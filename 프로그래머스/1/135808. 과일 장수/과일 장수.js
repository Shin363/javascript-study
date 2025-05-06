function solution(k, m, score) {
    var answer = 0;
    let appleBox = [];
    score.sort((a,b)=>b-a);
    for(let i=0; i<score.length/m; i++){
        appleBox = score.slice(m*i,(m*i)+m);
        if(appleBox.length<m)continue;
        answer+=(Math.min(...appleBox)*m);
    }
    return answer;
}