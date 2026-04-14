function conversion(data){
    let twoNum = [];
    while(data>1){
        twoNum.unshift(data%2);
        data = Math.floor(data/2);
    }
    twoNum.unshift(data);
    return twoNum.join("");
}

function zeroCountToRemove(str){
    let zeroCount = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]==="0") zeroCount+=1;
    };
    return zeroCount;
}

function solution(s) {
    let answer = [0,0];
    let num = s;
    while(num!=="1"){
    let zeroCount = zeroCountToRemove(num);
    num = conversion(num.length - zeroCount);
    answer[1] += zeroCount;
    answer[0] += 1;
    }
    return answer;
}