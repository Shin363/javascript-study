function solution(absolutes, signs) {
    var answer = 0;
    signs.forEach((v,i)=>{
        v==true?answer+=absolutes[i]:answer-=absolutes[i];
    })
    return answer;
}