function solution(a, b, n) {
    let answer = 0;
    let value = 0; 
    let rest = 0;
    while(Math.floor(n/a)>0){
        value = (Math.floor(n/a)*b);
        rest = n%a;
        n = value+rest;
        answer += value;
        
    }
    
    return answer;
}