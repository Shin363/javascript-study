function solution(n) {
    var answer = 0;
    //121이 양의 정수 x의 제곱인가? >11의 제곱이다.
    //소수인지 정수인지 구별하기 > 1로 나눠서 나머지가 0이면 정수????
    if((Math.sqrt(n)>0)&&(Math.sqrt(n)%1==0)){
        answer=Math.sqrt(n);
        return Math.pow(answer+1,2);
    }
    else{
        return -1;
    }
}