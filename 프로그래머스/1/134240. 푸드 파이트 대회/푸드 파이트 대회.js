function solution(food) {
    let answer = '';
    let leftFood = '';
    let rightFood = '';
    
    for(let i=1; i<food.length; i++){
        if(Math.floor(food[i]/2)==0)
            continue
        else{
            leftFood+=i.toString().repeat(Math.floor(food[i]/2).toString());
        }
    }
    // for(let j=leftFood.length-1; j>=0; j--){
    //     rightFood+=leftFood[j];
    // }
    // answer = leftFood + '0' + rightFood;
    rightFood=[...leftFood];
    answer = leftFood + '0' + rightFood.reverse().join('');
    return answer;
}