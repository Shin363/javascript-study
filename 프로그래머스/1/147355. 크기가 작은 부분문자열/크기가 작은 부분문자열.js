function solution(t, p) {
    var answer = 0;
    let i = 0;
    let j = 0;
    let k = p.length;
    let partArr = [];
    while(k<=t.length){
        partArr[j]=t.slice(i,k);
        i++;k++;j++;
    }
    for(let l=0; l<partArr.length; l++){
        if(parseInt(partArr[l])<=parseInt(p)){
            answer++;
        }
    }
    return answer;
}