function solution(absolutes, signs) {
    var answer = 0;
    // signs.forEach((v,i)=>{
    //     v==true?answer+=absolutes[i]:answer-=absolutes[i];
    // })
    return signs.reduce((acc,cur,i)=> {
        return acc + (cur?absolutes[i]:-absolutes[i])
    },0)
}