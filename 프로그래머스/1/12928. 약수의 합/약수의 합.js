function getDivisionNumber(n){
    let total=0;
    for(let i=1; i*i<=n; i++){
        if(n%i==0){
            total+=i;
            if(i!==n/i){total+=(n/i)}
        }
    }
    return total;
}
function solution(n) {
    var answer = 0;
    //12의 약수는 1부터 12까지 다 12%1,12%2,...12%12 가 0이면 그 숫자는 계속 더해주기
    //아래 방법은 시간복잡도O(N)
    // for(var i=1; i<=n; i++){
    //     if(n%i===0){
    //         answer+=i;
    //     }
    // }
    // 시간복잡도 O(√n)으로 줄이기
    answer=getDivisionNumber(n);
    return answer;
}