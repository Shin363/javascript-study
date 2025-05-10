function solution(n) {
    var answer = 0;
    for(let i=2; i<=Math.sqrt(n); i++){
        if((n-1)%i==0){
            answer = i;
            break;
        }
    }
    if(answer==0){answer = n-1}
    return answer;
}