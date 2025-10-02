function solution(s) {
    var answer = '';
    let flag = false;
    answer += s[0].toUpperCase();
    for(let i=1; i<s.length; i++){
        answer += flag?s[i].toUpperCase():s[i].toLowerCase()
        if(s[i]===" "){
            flag=true;
        }else{flag=false}
    }
    return answer;
}