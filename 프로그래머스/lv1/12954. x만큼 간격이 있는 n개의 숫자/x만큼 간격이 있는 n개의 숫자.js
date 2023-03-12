function solution(x, n) {
    var answer = [];
    var y=0;
    for(var i=0; i<n; i++){
        y=y+x;
        answer.push(y);
    }
    return answer;
}