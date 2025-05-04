function solution(s) {
    var answer = [];
    let sArr = new Array();
    for(let i=0; i<s.length; i++){
        if(sArr[s[i]]==null){
            //처음 나온 경우
            answer[i]=-1;
        }else{
            //앞에 있는 경우
            answer[i]=i-sArr[s[i]];
        }
        sArr[s[i]]=i;
    }
    return answer;
}