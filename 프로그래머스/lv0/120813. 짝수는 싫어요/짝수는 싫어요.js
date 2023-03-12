function solution(n) {
    var answer = [];
    if(n%2==0){
        //짝수면
        n=n-1;
        while(n>0){answer.push(n);n=n-2;}
    }
    else{
        while(n>0){answer.push(n);n=n-2;}
    }
    answer.sort(function(a,b){return a-b;})
    return answer;
}