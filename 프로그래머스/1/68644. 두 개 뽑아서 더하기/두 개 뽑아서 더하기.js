function solution(numbers) {
    var answer = [];
    let k = 0;
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            answer[k++] = numbers[i]+numbers[j];
        }
    }
    let newArr = [...new Set(answer)];
    return newArr.sort((a,b)=>a-b);
}