function getDivisorCount(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count++;                // i는 약수
            if (i !== n / i) count++; // 짝약수도 추가
        }
    }
    return count;
}
function solution(number, limit, power) {
    var answer = 0;
    let measureArr = Array.from({length:number},(_,i)=>i+1); 
    for(let i=0; i<measureArr.length; i++){
        const divisorCount=getDivisorCount(measureArr[i]);
        answer+=divisorCount>limit?power:divisorCount;
    }
    return answer;
}