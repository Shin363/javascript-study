// 원형 수열을 사용할 땐 배열을 2배로 늘려서 사용하기(인덱스 계산의 편리)
// 길이가 변하는 모든 부분 수열을 구할 땐 이중 반복문이 효과적
// 길이가 정해져 있는 부분 수열을 구할 땐 슬라이딩 윈도우 방식이 더 효과적
function solution(elements) {
    let answer = 0;
    let answerSet = new Set();
    let newElements = [...elements,...elements];
    let sum = 0;
    for(let i=1; i<=elements.length; i++){
        for(let j=0; j<elements.length; j++){
            //slice와 map을 사용하는 것보다 삼중 반복문이 더 ㄱㅊ을듯
            newElements.slice(j,j+i).map((v,_)=>sum+=v);
            answerSet.add(sum);
            // console.log([...answerSet].sort((a,b)=>a-b));
            sum = 0;
        }
    }
    return answerSet.size;
}