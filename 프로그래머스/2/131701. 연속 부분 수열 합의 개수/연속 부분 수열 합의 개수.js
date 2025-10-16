function solution(elements) {
    let answer = 0;
    let answerSet = new Set();
    let newElements = [...elements,...elements];
    let sum = 0;
    for(let i=1; i<=elements.length; i++){
        for(let j=0; j<elements.length; j++){
            newElements.slice(j,j+i).map((v,_)=>sum+=v);
            answerSet.add(sum);
            // console.log([...answerSet].sort((a,b)=>a-b));
            sum = 0;
        }
    }
    return answerSet.size;
}