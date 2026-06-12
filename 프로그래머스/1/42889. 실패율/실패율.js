//1. stages를 돌면서 1,2,3..이 몇 번 나왔는지 체크(challenger 배열에 저장,challenger 크기는 N+2)
    //challenger[0]=0, challenger[1]=1, challenger[2]=3, challenger[3]=2, challenger[4]=1, challenger[5]=0
    // 이런 식으로 저장될 것
//2. N을 돌면서 challenger[1+1]/stages.length-challenger[i] (x는 0부터 시작) 실패율 계산하기
//3. 가장 작은 수의 인덱스부터 출력하기, 같은 값인 게 있으면 앞에 있는 인덱스 먼저 출력하기
function solution(N, stages) {
    const challenger = new Array(N+2).fill(0);
    for(const stage of stages){
        challenger[stage] += 1;
    }
    
    const fails = {};
    let totals = stages.length;
    
    for(let i=1; i<=N; i++){
        if(challenger[i]===0){
            fails[i]=0;
            continue;
        }
        // 실패율 계산
        fails[i] = challenger[i]/totals;
        // 도전자 갱신
        totals -= challenger[i];
    }
    
    const result = Object.entries(fails).sort((a,b)=>b[1]-a[1]);
    return result.map((v)=>Number(v[0]));
}