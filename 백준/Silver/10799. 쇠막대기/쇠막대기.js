let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n")[0];

function solution(s){
    let answer=0;
    let stack=[];
    for(let i=0; i<s.length; i++){
        if(s[i]==='(') stack.push('(');
        else{
            stack.pop(); 
            if(s[i-1]==='(') {answer+=stack.length;}
            else answer++;
        }
    }
    return answer;
}

solution(input);
console.log(solution(input))