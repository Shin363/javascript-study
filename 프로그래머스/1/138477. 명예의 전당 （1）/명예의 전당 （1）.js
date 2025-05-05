function solution(k, score) {
    var answer = [];
    let scoreArr = [];
    for(let i=0; i<score.length; i++){
        if(i<k){scoreArr[i]=score[i];}
        else{
            if(score[i]>Math.min(...scoreArr)){
                let min = Math.min(...scoreArr);
                let idx = scoreArr.indexOf(min);
                scoreArr.splice(idx,1,score[i]);
            }
        }
        answer[i]=Math.min(...scoreArr);
    }
    return answer;
}