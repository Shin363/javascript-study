function solution(x) {
    var answer = true;
    let sum = 0;
    let tmp = x.toString();
    for(let i=0; i<tmp.length; i++){
        sum += Number(tmp[i]);
    }
    answer = x%sum===0 ? true : false;
    return answer;
}