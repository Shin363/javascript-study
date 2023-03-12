function solution(n) {
    var answer = [];
    for(var i = 0; i <= n; i++) {
        if(i%2 !== 0) { //홀수면 push ... push는 꼬리에 추가된다.
            answer.push(i);
        }
    }
    return answer;
}