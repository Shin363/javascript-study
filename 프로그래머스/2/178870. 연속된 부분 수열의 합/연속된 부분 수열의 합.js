function solution(sequence, k) {
    var answer = [];
    let sum = 0; let lt=0;
    for(let rt=0; rt<sequence.length; rt++){
        sum+=sequence[rt];
        if(sum==k){answer.push([lt,rt]);}
        while(sum>=k){
            sum-=sequence[lt++];
            if(sum==k){answer.push([lt,rt]);}
        }
    }
    let min = answer[0]; let minLen=min[1]-min[0];
    for(let i=1; i<answer.length; i++){
        let [l,r] = answer[i];
        let len = r-l;
        if(len<minLen){
            minLen=len; min=[l,r];
        }
    }
    return min;
}