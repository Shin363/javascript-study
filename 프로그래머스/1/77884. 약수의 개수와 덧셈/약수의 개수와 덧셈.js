function solution(left, right) {
    var answer = 0;
    const numArr = Array.from({length:right-left+1},(v,i)=>left+i);
    for(let i=0; i<numArr.length; i++){
        let count = 0;
        for(let j=1; j<=numArr[i]; j++){
            if(numArr[i]%j==0){count++;}
        }
        count%2==0?answer+=numArr[i]:answer-=numArr[i];
    }
    
    return answer;
}