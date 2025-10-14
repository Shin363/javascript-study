function solution(order) {
    let answer = 0;
    let subContainer = [];
    let main_idx = 1; // 메인 벨트에서 다음에 나올 상자 번호
    let i = 0;        // order 배열의 인덱스
    
    while(i<order.length){
        const required = order[i];
        //서브컨테이너에서 꺼낼 수 있는 건 다 꺼내기
        if(subContainer.length>0 && 
           subContainer[subContainer.length-1]===required){
            subContainer.pop();
            answer++;
            i++;
        }
        //메인컨테이너에서 바로 처리할 수 있는 경우
        else if(main_idx===required){
            answer++;
            i++;
            main_idx++;
        }
        //서브컨테이너에 적재해야 하는 경우
        else if(main_idx<required){
            subContainer.push(main_idx);
            main_idx++;
        }
        //작업을 더 이상 진행할 수 없는 경우
        else{
            break;
        }
        
    }
    
    return answer;
}