function solution(n) {
    var answer = [];
    //12345 -> [5,4,3,2,1] 출력
    var num=0;
    while(n>0){
        answer[num]=n%10;
        num++; n=parseInt(n/10);
    }
    return answer;
}