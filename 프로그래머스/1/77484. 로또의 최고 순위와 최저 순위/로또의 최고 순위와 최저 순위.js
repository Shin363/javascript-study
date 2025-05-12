// function isLotto(lotto){
//     if(lotto==6){return 1}
//     else if(lotto==5){return 2}
//     else if(lotto==4){return 3}
//     else if(lotto==3){return 4}
//     else if(lotto==2){return 5}
//     else{return 6}
// }
function solution(lottos, win_nums) {
    var answer = [0,0];
    lottos.forEach((v)=>{
        if(win_nums.includes(v)){
            answer[0]++;
            answer[1]++;
        }
        else if(v==0){
            answer[0]++;
        }
    })
    // answer[0]=isLotto(answer[0]);
    // answer[1]=isLotto(answer[1]);
    return Array.from(answer,(x)=>x<=1?6:7-x);
}