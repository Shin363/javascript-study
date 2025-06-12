function solution(s) {
    let answer = "";
    let cnt=0; let v = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]===" "){answer+= " "; cnt=0;}
        else{
            answer += cnt%2===0? s[i].toUpperCase() : s[i].toLowerCase();
            cnt++;
        }
    }
    return answer;
}