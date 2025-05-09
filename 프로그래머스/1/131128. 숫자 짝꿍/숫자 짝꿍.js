function solution(X, Y) {
    var answer = '';
    let newArr = [];
    let xArr = new Array(10).fill(0);
    let yArr = new Array(10).fill(0);
    
    for (x of X){xArr[x]++;}
    for (y of Y){yArr[y]++;}
    
    for(let i=0; i<=9; i++){
        let minCount = Math.min(xArr[i],yArr[i]);
        answer += i.toString().repeat(minCount);
    }
    
    if(answer=="") {
        answer="-1";
    }
    else{
        newArr = [...answer].sort((a,b)=> b-a);
        answer = newArr.join('');
        if(answer[0]=="0"){answer="0"};
    }
     
    return answer;
}