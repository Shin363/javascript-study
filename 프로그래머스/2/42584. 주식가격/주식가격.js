// 이 문제 핵심 포인트 : 시간복잡도가 n^2이면 안된다. 불필요한 연산 줄이기
// prices를 하나씩 비교해가는 것보다 떨어지는 구간을 기준으로 앞선 가격과 비교해서 가격이 떨어지지 않은 구간이 확정된 애들은 연산에서 제거해서 시간 복잡도를 줄이기.
function solution(prices) {
    const n = prices.length;
    const arr = new Array(n).fill(0);
    
    const stack = [0]; //처음엔 비교 대상이 없으니 인덱스 0을 넣어둠
    for(let i=1; i<n; i++){
        while(stack.length>0&&prices[i]<prices[stack[stack.length-1]]){
            const j = stack.pop(); //떨어지는 구간(인덱스)
            arr[j]=i-j;
        }
        stack.push(i);
    }
    //끝날 때까지 가격이 떨어지지 않은 애들
    while(stack.length>0){
        const s = stack.pop();
        arr[s]= n-1-s;
    }
    return arr;
}