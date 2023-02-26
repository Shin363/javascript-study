function solution(n) {
    var answer = 0;
    //12의 약수는 1부터 12까지 다 12%1,12%2,...12%12 가 0이면 그 숫자는 계속 더해주기
    for(var i=1; i<=n; i++){
        if(n%i===0){
            answer+=i;
        }
    }
    return answer;
}