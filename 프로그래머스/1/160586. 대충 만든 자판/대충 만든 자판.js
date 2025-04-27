function solution(keymap, targets) {
    var answer = [];
    var nummap = {};
    
    for(let i=0; i<keymap.length; i++){
        for(let j=0; j<keymap[i].length; j++){
            const key = keymap[i][j]
            if(nummap[key]===undefined||nummap[key]>j){
                nummap[key]=j;
            }
            
            else{continue;}
        }
    }
    targets.map((word)=>{
        let sum=0;
        for(ch of word){
            if(nummap[ch]!==undefined){
                sum+=nummap[ch]+1;
            }
            else{
                sum= -1;
                break;
            }
        }
        answer.push(sum);
    });
    return answer;
}