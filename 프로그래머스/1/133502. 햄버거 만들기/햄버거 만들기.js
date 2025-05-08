function solution(ingredient) {
    var answer = 0;
    // let i=0;
    // while(i<=ingredient.length-4){
    //     if(ingredient[i]==1 && ingredient[i+1]==2 &&
    //       ingredient[i+2]==3 &&ingredient[i+3]==1){
    //         answer++; ingredient.splice(i,4); 
    //         //i를 이전 1의 위치로 돌리기
    //         i=i-3<=0?0:i-3
    //     }
    //     else{
    //         i++;
    //     }
    // }
    let stack = [];
    for(let i=0; i<ingredient.length; i++){
        stack.push(ingredient[i]);
        if(stack.length>=4&&stack.slice(-4).join("")=="1231"){
            answer++;
            stack.splice(-4);
        }
    }
    
    return answer;
}