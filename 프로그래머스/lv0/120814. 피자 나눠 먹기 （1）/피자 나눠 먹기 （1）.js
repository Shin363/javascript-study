function solution(n) {
    var answer = 0;
    if(n<=7){
        return 1;
    }
    else{
        return (Math.ceil(n/7));
    }
    return answer;
}