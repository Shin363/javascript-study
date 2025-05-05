function solution(s) {
    var answer = 0;
    let text = s[0];
    let xCount=0;
    let notxCount=0;
    for(let i=0; i<s.length; i++){
        text==s[i]?xCount++:notxCount++;
        if(xCount==notxCount){
            answer++;
            text=s[i+1];
            xCount=0;
            notxCount=0;
        }
        
    }
    //남은 문자 있으면 처리
    if(xCount!==0 || notxCount!==0){
        answer++;
    }
    return answer;
}