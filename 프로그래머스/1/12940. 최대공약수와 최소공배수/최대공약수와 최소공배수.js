function findMax(a,b){
    return b===0?a:findMax(b,a%b);
}
function solution(n, m) {
    const yaksu = findMax(n,m);
    const besu = (n*m)/yaksu;
    return [yaksu,besu];
}