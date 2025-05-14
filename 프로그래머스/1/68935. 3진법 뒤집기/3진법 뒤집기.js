function solution(n) {
    // var answer = "";
    // let max = 0;
    // while(Math.pow(3,max)<=n){max++;}
    // for(let i=max-1; i>=0; i--){
    //     let temp = Math.floor(n/(Math.pow(3,i)));
    //     answer += temp.toString();
    //     n -= Math.pow(3,i)*temp;
    // }
    // let reverse = [...answer].reverse();
    // return reverse.reduce((acc,cur,i)=>{
    //     return acc + Number(cur)*Math.pow(3,max-i-1)
    // },0);
    //1. 3진법으로 변환
    const temp = n.toString(3);
    //2. 뒤집기
    const reversed = temp.split("").reverse().join("");
    //3. 다시 10진수로 변환
    return parseInt(reversed,3);
}