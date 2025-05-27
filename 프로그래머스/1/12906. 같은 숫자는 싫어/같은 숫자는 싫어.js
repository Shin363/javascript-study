function solution(arr){
    let answer = [arr[0]];
    let tmp = arr[0];
    for(let i=1; i<arr.length; i++){
        if(tmp==arr[i]){continue;}
        else{answer.push(arr[i]); tmp=arr[i];}
    }
    return answer;
}