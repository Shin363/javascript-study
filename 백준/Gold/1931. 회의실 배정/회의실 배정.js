const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const meetings = input.slice(1).map(line=>{
    return line.split(" ").map(Number);
});

let answer = 0; let ep = 0;
//[b]값 기준으로 정렬, 같은 게 있으면 [a]기준 정렬 [1,3][3,5]
meetings.sort((a,b)=>{
    if(a[1]==b[1]){return a[0]-b[0];}
    else{return a[1]-b[1];}
})
for(let x of meetings){
    if(x[0] >= ep){
       answer++;
       ep=x[1];
    }
}
console.log(answer);

